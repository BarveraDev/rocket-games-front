import { styled } from "styled-components";

export const Container = styled.div`
  grid-template-areas:
    "header header"
    "form form";
`;

export const Header = styled.header`
  align-items: center;
  grid-area: header;
  display: flex;
  height: 20vh;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  > a {
    align-items: center;
    margin-left: 10em;
    display: flex;

    .arrow-left {
      margin-right: 1em;
      color: aliceblue;
      height: 20px;
      width: 20px;
    }

    span {
      color: aliceblue;
    }
  }
`;

export const Form = styled.form`
  justify-content: center;
  grid-area: form;

  > div {
    align-items: center;
    flex-direction: column;
    display: flex;
    img {
      margin: -6em;
      border-radius: 50%;
      width: 15em;
      height: 15em;
      margin-bottom: 5em;
    }
  }
`;
