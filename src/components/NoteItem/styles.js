import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: 10px;

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;
    font-size: 17px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
