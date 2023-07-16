import { styled } from "styled-components";

export const CreateProfilePageStyled = styled.div`
  .otp-main-container {
    display: flex;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  .left-container {
    display: grid;
    place-items: center;
    /* border: 1px solid white; */
    width: 50%;
    align-content: center;
    background: linear-gradient(136deg, #220e4d 2%, #6b068e 90.18%);
    color: white;
  }
  .right-container {
    width: 50%;
    text-align: start;
    display: grid;
    align-content: center;
    justify-items: start;
    background-color: rgb(235, 231, 231);

    padding: 30px;
  }

  .logo {
    max-width: 50%;
    height: 100px;
    /* border: 1px solid white; */
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
`;
