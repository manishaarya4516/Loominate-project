import { styled } from "styled-components";

export const MoreDetailsStyled = styled.div`
  input {
    border: none;
    border-bottom: 1px solid aqua;
    padding: 10px;
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
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 10px;
    text-align: start;
    padding: 20px;
  }

  .choose-avatar {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 90%;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .img-container {
    display: block;
    height: 60px;
    width: 60px;
    border-radius: 100%;
  }

  .selected-img-container {
    border: 2px solid #03c5cc;
  }

  .arrow-btn {
    color: #000;
    border: 2px solid #03c5cc;
    background-color: transparent;
    margin-top: 20px;
    padding: 10px;
    border-radius: 12px;
    width: 100px;
  }
`;
