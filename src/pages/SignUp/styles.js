import { styled } from "styled-components";
import Background from "../../assets/boxOffice.jpg";

export const BackgroundBoxOffice = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: brightness(0.4);
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 6em;
  max-width: 500px;
  height: 600px;
  width: 100%;
  background: rgba(25, 25, 25, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    margin-top: 25px;
  }

  > p {
    font-family: "Josefin Sans", sans-serif;
    margin-top: 5px;
  }

  > h2 {
    font-size: 35px;
    margin: 50px 0 10px 0;
  }

  @media (max-width: 390px) {
    max-width: 350px;
    padding: 1em 3em;

    > h1 {
      font-size: 30px;
    }
    > p {
      text-align: center;
    }
  }
`;
