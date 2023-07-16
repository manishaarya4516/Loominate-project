import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { NavbarStyled } from "./navbar-style";

const Navbar = () => {
  // const handleClick = () => {
  //   alert("search");
  // };
  return (
    <>
      <NavbarStyled>
        <nav className="navbar-container">
          <img
            className="logo"
            src="	https://soombo.loominate.app/static/media/newlogo.51801a18.png"
            alt=""
          />

          <div className="search-bar">
            <input className="search-input" type="text" placeholder="search" />
            <SearchOutlined />
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/home">
              <img
                className="msg-icon"
                src="	https://soombo.loominate.app/static/media/Message.52172867.svg"
                alt=""
              />
            </a>

            <a href="/home">
              <img
                className="alert-icon"
                src="	https://soombo.loominate.app/static/media/Notification.3f85f7ce.svg"
                alt=""
              />
            </a>
            <a href="/home">
              <img
                className="avatar-head"
                src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                alt=""
              />
            </a>
          </div>
        </nav>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
