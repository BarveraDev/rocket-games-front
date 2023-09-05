import { styled } from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  margin-top: 30px;

  > svg {
    margin-right: 10px;
  }
`;
