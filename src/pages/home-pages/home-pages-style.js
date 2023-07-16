import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  .home-container {
    background-color: gainsboro;
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    padding: 10px;
    margin: 0;
    display: flex;
  }

  .left-container {
    width: 20%;
    height: 100%;

    margin: 10px;
  }

  .right-container {
    width: 30%;
    height: 100%;

    margin: 10px;
  }

  .feed-container {
    width: 50%;
    height: 100%;

    margin: 10px;
  }
  .sub-nav,
  .post-container,
  .community,
  .profile,
  .about,
  .guidelines,
  .culture {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .left-container ul {
    padding: 0;
  }
  .sub-nav p {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }
  .sub-nav li {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 5px;
    border-radius: 10px;
    width: 80%;

    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: black;
  }

  .catagories {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: start;

    padding-left: 16px;
    padding-bottom: 16px;

    border-radius: 5px;
  }
  button {
    outline: none;
    border: none;
  }

  .catagories button {
    margin-bottom: 5px;
  }

  .post-bar {
    padding: 5px 10px 5px 10px;

    border-radius: 5px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter-sub-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .filter-bar p {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
  }

  .avatar-head {
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  .post-container {
    padding: 16px;
  }

  .head p {
    margin: 0;
  }
  .content {
    text-align: start;
  }
  .content img {
    width: 100%;
    height: 50%;
  }

  .content p {
    margin: 10px 0px;
  }

  .comment-box {
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 5px;
    /* margin-left: 4.6rem; */
    background: white;
    flex: 1;
    gap: 20px;
    border: 1px solid gray;
    border-radius: 20px;
  }

  .comment-input {
    outline: none;
    border: none;
    flex: 1;
    margin-left: 0.6rem;
  }
  .comment-box button {
    background-color: #198754;
    padding: 8px;
    border-radius: 20px;
    width: 80px;
    color: white;
  }

  .community img,
  .profile img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .profile img {
    width: 70px;
    height: 70px;
  }

  .profile {
    text-align: start;
    height: 200px;
  }
  .floating-points {
    position: relative;
    top: 0.3em;
    background: transparent;
    height: 60px;
    display: flex;
    justify-content: center;
    gap: 10px;
    height: auto;
    margin-bottom: 50px;
  }
  .points {
    padding: 10px;
    display: grid;
    place-items: center;
  }

  .floating-points p,
  h3,
  .guidelines h4 {
    margin: 0;
    padding: 0;
  }

  .floating-points p {
    font-size: 12px;
  }

  .karma-points {
    text-align: center;
    max-width: 15%;
    border-radius: 10px;
    background: linear-gradient(90deg, #03c5cc 0, #4b008b);
    padding: 10px;
    color: white;
  }
  .about {
    background: linear-gradient(90deg, #03c5cc 0, #4b008b);
    color: white;
    margin-top: 40px;
    text-align: start;
  }
  .about h4,
  p {
    margin: 8px 0px;
  }
  .guidelines h4 {
    color: #03c5cc;
  }

  .guidelines,
  .culture {
    text-align: start;
  }
  .selected {
    background: linear-gradient(90deg, #03c5cc 0, #2b57a8);
    color: white;
  }
`;
