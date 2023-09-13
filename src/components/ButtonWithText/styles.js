import { styled } from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: aliceblue;
  }

  > svg {
    margin-right: 10px;
  }
`;
