import { styled } from "styled-components";

export const LoginPageStyled=styled.div`
.main-container {
    background: linear-gradient(136deg, #220e4d 2%, #6b068e 90.18%);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    color: white;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  .logo-container {
    display: grid;
    place-items: center;
    /* border: 1px solid white; */
    width: 50%;
    align-content: center;
  }

  .logo {
    max-width: 100%;
    height: 50px;
    /* border: 1px solid white; */
  }

  .logo-image {
    max-width: 100%;
    height: 80%;
  }
  .left-container {
    display: grid;
    place-items: center;
    /* border: 1px solid white; */
    width: 50%;
  }
  .left-container .login-container {
    width: 90%;
    min-height: 60%;
  }
  .login-container {
    background-color: white;
    color: black;
    border-radius: 28px;
    background-color: #d3e6f5;
    margin: 10px;
  }
  .main-container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 15px;
    text-align: start;
    padding: 20px;
  }
  .login-container .login-nav {
    width: 100%;
  }
  .login-nav {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: gray;
    font-weight: bold;
  }

  input {
    border: none;
    border-bottom: 1px solid aqua;
    padding-bottom: 10px;
    outline: none;
  }

  button[type="submit"] {
    margin-top: 20px;
    padding: 10px;
    background: linear-gradient(116.45deg, #03c5cc -23.1%, #4b008b 250.18%);
    border: none;
    color: white;
    border-radius: 12px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .login-box {
    padding: 20px;
    background-color: white;
    border-radius: 40px 40px 28px 28px;
  }

  .info {
    text-align: start;
    font-size: 14px;
  }
  .info p {
    display: flex;
    gap: 5px;
  }

`;