import { styled } from "styled-components";

export const Container = styled.span`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: #1b9aaa;
`;
