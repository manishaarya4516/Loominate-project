import React, { useState } from "react";
import { LoginPageStyled } from "./login-pages-style";
import SignIn from "../../components/signin/sign-in";
import SignUp from "../../components/signup/sign-up";

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
  
    const handleSwitch = (tab) => {
      if (tab === "sign-up") {
        setIsSignIn(false);
      } else {
        setIsSignIn(true);
      }
    };
  
    return (
      <>
        <LoginPageStyled>
          <div className="main-container">
            <div className="logo-container">
              <img
                className="logo"
                src="https://soombo.loominate.app/static/media/newlogo.51801a18.png
                "
                alt=""
              />
              <h2>Your Work place Community</h2>
              <img
                className="logo-image"
                src="https://soombo.loominate.app/static/media/new3monsters.afd23f01.png"
                alt=""
              />
            </div>
            <div className="left-container">
              <div className="login-container">
                <div className="login-nav">
                  <label onClick={() => handleSwitch("sign-in")}>SIGN IN</label>
                  <label onClick={() => handleSwitch("sign-up")}>SIGN UP</label>
                </div>
                <div className="login-box">
                  {isSignIn ? <SignIn /> : <SignUp />}
                </div>
              </div>
            </div>
          </div>
        </LoginPageStyled>
      </>
    );
  };
  
  export default LoginPage;
  