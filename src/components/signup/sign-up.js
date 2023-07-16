import React, { useState } from "react";
import InfoModal from "../modals/info-modal";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setOtpReader } = useApplicationContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("https://loominatebackend-manishaarya4516.b4a.run/api/otp/send-otp", { email })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setOtpReader(data);

        localStorage.setItem("email", email);
        setIsLoading(false);
        navigate("/otp-validation");
      })
      .catch((err) => console.log(err));
    // Handle successful OTP request
  };
  return (
    <div>
      <h2>Join Your Colleagues</h2>
      <form onSubmit={handleSubmit}>
        <labe>Email:</labe>
        <input
          type="email"
          placeholder="ex: john@theagency.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="info">
          <p>
            🧙&zwj;♂️ Your work email is only used to confirm which space you
            belong{" "}
            <InfoModal
              title="🧙 Colleagues Only"
              content="Loominate is a place for that coworkers of the same organization. We group colleagues into the same private space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com). All users go through the same verification process.
              Note: Loominate is an independent, employee-driven platform and is not affiliated to your company or organization."
            />
          </p>
        </div>
        <div className="info">
          <p>
            🔐 Your identity is protected
            <InfoModal
              title=" 🔐 Safety"
              content="Your work email is immediately one-way hashed and held separately from the account that you are about to create.

This means that there is no way for your organization to trace your username or activity back to your work email.

Our secure system provides the true psychological safety required for colleagues to speak openly and honestly."
            />
          </p>
        </div>
        <div className="info">
          <p>
            {" "}
            🦄 Just be yourself... and get rewarded for{" "}
            <InfoModal
              title=" 🦄 The only place to just be yourself"
              content="Loominate is an alias-based platform where staff can...

Connect across hierarchies and divisions to trade battle stories and exchange thoughts on company issues.
Get honest answers about layoffs, mental health, salaries, and career progression.
Be vulnerable - speak up on your struggles and get upvoted support from colleagues who have been through it."
            />{" "}
          </p>
        </div>

        <button type="submit">
          {isLoading ? <LoadingOutlined /> : "VERIFY"}{" "}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
