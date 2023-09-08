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
  padding-left: 15em;
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
  max-width: 340px;
  margin: -6em auto 0;
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;

  width: 186px;
  height: 186px;

  > img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    border: 2px solid white;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: black;
    }
  }
`;
