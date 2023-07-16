import React, { useState } from "react";
import { MoreDetailsStyled } from "./more-details-style";
import { Avatars } from "../avatars/avatars";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MoreDetails = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();

  const email = localStorage.getItem("email");

  const handleCreateUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);

    axios
      .post("https://loominatebackend-manishaarya4516.b4a.run/api/user/signup/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        const data = await response.data;

        setIsLoading(false);
        localStorage.setItem("userData", JSON.stringify(data));

        
        setUsername("");
        setPassword("");
        navigate("/");
      
      })
      .catch((err) => console.log(err));
  };

  const handleSelect = (id, url) => {
    setSelectedAvatar(id);
    setProfilePic(url);
  };
  return (
    <div>
      <MoreDetailsStyled>
        <h3>Setup Your Profile</h3>
        <form onSubmit={handleCreateUser}>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Choose your avatar </p>
          <div className="choose-avatar ">
            {Avatars.map((avatar) => {
              return (
                <img
                  className={
                    selectedAvatar === avatar.id
                      ? "img-container selected-img-container"
                      : "img-container"
                  }
                  key={avatar.id}
                  src={avatar.url}
                  onClick={() => handleSelect(avatar.id, avatar.url)}
                  alt=""
                />
              );
            })}
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <button className="arrow-btn">
              <ArrowLeftOutlined />
            </button>
            <button type="submit">
              {isLoading ? <LoadingOutlined /> : "CREATE ACCOUNT"}
            </button>
          </div>
        </form>
      </MoreDetailsStyled>
    </div>
  );
};

export default MoreDetails;
