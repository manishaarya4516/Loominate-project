import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { HomePageStyled } from "./home-pages-style";
import {
  AlignLeftOutlined,
  BarChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Catagories } from "../../components/category-list/category-list";
import Feed from "../../components/feed/feed";
import GuideLines from "../../components/collapse/guidelines";
import LeaderBoard from "../../components/leader-board/leader-board";

const HomePage = () => {
  const [isFeed, setIsFeed] = useState(true);
  const [selectedItem, setSelectedItem] = useState("feed");
  const handleSwitch = (current) => {
    setSelectedItem(current);

    if (current === "leaderboard") {
      setIsFeed(false);
    } else {
      setIsFeed(true);
    }
  };

  return (
    <>
      <HomePageStyled>
        <Navbar />
        <div className="home-container">
          <div className="left-container">
            <div className="sub-nav">
              <ul>
                <li
                  className={selectedItem === "feed" ? "selected" : ""}
                  onClick={() => handleSwitch("feed")}
                >
                  <AlignLeftOutlined />
                  <p>MY FEED</p>
                </li>
                <li
                  className={selectedItem === "leaderboard" ? "selected" : ""}
                  onClick={() => handleSwitch("leaderboard")}
                >
                  <BarChartOutlined />
                  <p>LEADER BOARD</p>
                </li>
                <li
                  className={selectedItem === "my-profile" ? "selected" : ""}
                  onClick={() => handleSwitch("my-profile")}
                >
                  <UserOutlined />
                  <a href="/">MY PROFILE</a>
                </li>
              </ul>
            </div>
            <div className="catagories">
              <p style={{ fontWeight: "bold" }}>CATAGORIES</p>

              {Catagories.map((item) => {
                return (
                  <>
                    <button key={item.id}>{item.cat}</button>
                  </>
                );
              })}
            </div>
          </div>
          <div className="feed-container">
            {isFeed ? <Feed /> : <LeaderBoard />}
          </div>
          <div className="right-container">
            <div style={{ textAlign: "start" }} className="community">
              <h3 style={{ margin: "0px 0px 16px 0px" }}>
                MY COWORKER COMMUNITY
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src="https://soombo.loominate.app/static/media/avatar-company.bf9e77bc.png"
                  alt=""
                />
                <h4>Gmail</h4>
              </div>
            </div>

            <div className="profile">
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
                  <p style={{ fontSize: "18px", margin: "5px 0px" }}>rjmnhr</p>
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
            <div className="about">
              <h4>About</h4>
              <p>
                Loominate is a place to be your magical self. Ask those silly
                questions, seek support for your struggles, join moonshot ideas
                and be the changemaker!
              </p>
            </div>
            <div className="guidelines">
              <h3 style={{ paddingBottom: "20px" }}>GUIDELINES</h3>
              <GuideLines />
            </div>
            <div className="culture">
              <h3 style={{ paddingBottom: "20px" }}>
                Our culture is community moderated, help flag:
              </h3>
              <ol>
                <li>Naming of individual staff members</li>
                <li>Discrimination, Hate Speech or Profanity</li>
                <li>Bullying, Harassment or Trolling</li>
                <li>Sensitive information</li>
                <li>Inappropriate content or Spam</li>
              </ol>
            </div>
          </div>
        </div>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
