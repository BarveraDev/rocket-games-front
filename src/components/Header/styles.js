import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  width: 100%;
  height: 105px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
  padding: 0 2em 0 2em;
  position: fixed;
  > div {
    display: flex;
  }

  @media (min-width: 768px) {
    gap: 2em;
    .input {
      width: 15em;
    }
  }
  @media (min-width: 1440px) {
    gap: 5em;
    .input {
      width: 50em;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 30em;
  justify-content: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;

    a {
      font-weight: bolder;
    }
  }

  > a {
    > img {
      margin-left: 10px;
      border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
      width: 5em;
      height: 5em;
      border-radius: 50%;
    }
  }
`;

export const Brand = styled.div`
  > a {
    font-size: 2em;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 600;
  }

  @media (max-width: 767px) {
    > a {
      display: none;
    }
  }
  @media (min-width: 768px) {
    > a {
      font-size: 26px;
    }
  }
  @media (min-width: 1440px) {
    > a {
      font-size: 30px;
    }
  }
`;
