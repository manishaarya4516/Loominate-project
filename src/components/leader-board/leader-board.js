import React from "react";
import { LeaderboardStyled } from "./leader-board-style";

const LeaderBoard = () => {
  return (
    <>
      <LeaderboardStyled>
        <div className="leaderboard-container">
          <div className="switch-bar">
            <h3 className="tab">All Time</h3>
            <h3 className="tab">This Week</h3>
            <h3 className="tab">This Month</h3>
          </div>
          <div className="img-container">
            <div className="img-holder">
              <img
                className="img"
                src="	https://soombo.loominate.app/static/media/newav2.7b9883d0.png"
                alt=""
              />
            </div>
            <div className="middle-img-holder">
              <img
                className="middle-img"
                src="	https://soombo.loominate.app/static/media/newav1.cbc73d6c.png"
                alt=""
              />
            </div>
            <div className="img-holder">
              <img
                className="img"
                src="	https://soombo.loominate.app/static/media/newav3.add919d4.png"
                alt=""
              />
            </div>
          </div>
          <div style={{ position: "relative", bottom: "80px" }}>
            <h3 style={{ margin: "0", color: "white" }}>25</h3>
            <p style={{ margin: "0", fontWeight: "bold", color: "#efff72" }}>
              rjmnhr
            </p>
          </div>
        </div>
      </LeaderboardStyled>
    </>
  );
};

export default LeaderBoard;
