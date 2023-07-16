import React from "react";

const MyProfile = () => {
  return (
    <div className="my-profile">
      <h3 style={{ margin: "0px 0px 16px 0px" }}>MY PROFILE</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          alt=""
        />
        <div>
          <p style={{ fontSize: "18px", margin: "5px 0px" }}>manish</p>
          <p style={{ fontSize: "12px", color: "gray", margin: "0" }}>
            Joined May 2023
          </p>
        </div>
      </div>
      <p>Hello this is me!</p>
      <div className="floating-points">
        <div className="karma-points">
          <h3 style={{ color: "yellow" }}>25</h3>
          <p>Karma Points</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <div className="points">
            <h3>4</h3>
            <p>Posts</p>
          </div>
          <div className="points">
            <h3>2</h3>
            <p>Polls</p>
          </div>
          <div className="points">
            <h3>1</h3>
            <p>Initiatives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
