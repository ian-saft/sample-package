import styled from "styled-components";

const Container = styled.div`
  width: 480px;
  padding: 12px;
  margin: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: gray;

  font-size: 12px;
  font-weight: bold;
  font-family: "Nunito", "Roboto", sans-serif;

  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  :hover {
    cursor: pointer;

    h1 {
      color: #6ecf42;
    }
  }

  .logo {
    background-image: url(../assets/logo.png);
  }
`;

export default Container;
