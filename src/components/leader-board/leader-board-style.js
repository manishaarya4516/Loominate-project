import { styled } from "styled-components";

export const LeaderboardStyled = styled.div`
  .leaderboard-container {
    background: linear-gradient(90deg, #03c5cc 0, #2b57a8);
    padding-top: 10px;
    border-radius: 10px;
  }
  .img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .middle-img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-holder,
  .middle-img-holder {
    background: hsla(0, 0%, 95.7%, 0.13333333333333333);
    padding: 15px;
    border-radius: 100%;
  }
  .middle-img-holder {
    margin-bottom: 100px;
  }
  .switch-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: hsla(0, 0%, 95.7%, 0.13333333333333333);
    color: white;
    margin: 0px 15% 5% 15%;
    border-radius: 18px;
  }

  .tab {
    padding: 10px;
    border-radius: 18px;
  }
`;
