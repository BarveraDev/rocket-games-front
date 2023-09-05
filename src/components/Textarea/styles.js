import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15em;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
