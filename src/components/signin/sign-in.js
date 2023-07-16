import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const SignIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login successfully",
    });
  };

  useEffect(() => {
    let timeoutId;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        error("Check your internet connection");
      }, 15000);
    }
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(" http://localhost:8002/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);

        if (!data.username || typeof data === "string") {
          error(data);
          document.querySelector(".input1").style.borderBottom =
            "1px solid red";
          document.querySelector(".input2").style.borderBottom =
            "1px solid red";
          return;
        }
        success();

        const accessToken = data.accessToken;
        if (!accessToken) return error(data);
        setUsername("");
        setPassword("");
        navigate("/home");
        localStorage.setItem("userLoginData", JSON.stringify(data));
      })
      .catch((err) => console.log("error", err));
  };
  return (
    <div>
      {contextHolder}
      <h2>Coworker's Community</h2>
      <form onSubmit={handleSubmit}>
        <labe>Username:</labe>
        <input
          className="input1"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <labe>Password:</labe>
        <input
          className="input2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {" "}
          {isLoading ? <LoadingOutlined /> : "SIGN IN"}{" "}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
