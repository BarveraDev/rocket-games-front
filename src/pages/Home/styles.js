import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "header "
    "content"
    "section";
  grid-template-rows: 105px 8rem 40em;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4em;
  width: 100%;

  > h2 {
    font-size: 2em;
    display: flex;
    justify-content: center;
  }
`;

export const Section = styled.div`
  align-items: center;
  grid-area: section;
  display: flex;
  flex-direction: column;

  margin-top: 5%;
`;

export const MovieSection = styled.div`
  padding: 1em;
  overflow-y: auto;
  max-height: calc(100vh - 100px);

  &::-webkit-scrollbar {
    width: 9px; /* Largura da barra de rolagem vertical */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.WHITE}; /* Cor do polegar */
    border-radius: 5px; /* Borda arredondada do polegar */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) =>
      theme.COLORS.BACKGROUND_3}; /* Cor do polegar ao passar o mouse */
  }
`;
