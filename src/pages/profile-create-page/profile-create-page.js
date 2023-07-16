import React from "react";
import OTPValidationComponent from "../../components/otp-validation/otp-validation";
import { CreateProfilePageStyled } from "./profile-create-page-style";
import MoreDetails from "../../components/more-details/more-details";
import { useApplicationContext } from "../../context/app-context";

const ProfileCreatePage = () => {
  const { isEmailVerified } = useApplicationContext();
  return (
    <div>
      <CreateProfilePageStyled>
        <div className="otp-main-container">
          <div className="left-container">
            <img
              className="logo"
              src="https://soombo.loominate.app/static/media/newlogo.51801a18.png"
              alt=""
            />
            <h2>Your Work place Community</h2>
          </div>
          <div className="right-container">
            {isEmailVerified ? <MoreDetails /> : <OTPValidationComponent />}
          </div>
        </div>
      </CreateProfilePageStyled>
    </div>
  );
};

export default ProfileCreatePage;
