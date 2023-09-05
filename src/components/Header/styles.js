import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  width: 100%;
  height: 105px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
  padding: 4em 15em;
  position: fixed;
  gap: 5em;
  > div {
    display: flex;
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
`;
