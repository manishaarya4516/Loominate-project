import { styled } from "styled-components";

export const NavbarStyled = styled.div`
  .navbar-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(90deg, #03c5cc 0, #4b008b);
    padding: 10px;
  }
  .search-bar {
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    /* margin-left: 4.6rem; */
    background: white;
    width: 40%;
    gap: 20px;
  }

  .search-bar input {
    outline: none;
    border: none;
    flex: 1;
    margin-left: 0.6rem;
  }

  .avatar-head,
  .alert-icon,
  .msg-icon {
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  .logo {
    width: 10%;
    height: 10%;
  }
`;
