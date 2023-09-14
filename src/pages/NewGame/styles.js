import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "section";
  grid-template-rows: 105px auto;
`;

export const Section = styled.section`
  grid-area: section;

  > h3 {
    font-size: 24px;
    margin-bottom: 1em;
  }

  .textArea {
    margin-bottom: 2em;
  }

  .top {
    margin-bottom: 1em;
  }
  .arrow {
    margin-right: 1em;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  h2 {
    font-size: 30pt;
    margin-bottom: 1em;
  }

  .saveAndDelete {
    display: flex;
    gap: 2rem;
    margin-bottom: 3em;
  }

  @media (max-width: 390px) {
    padding: 2em;
  }
  @media (min-width: 391px) {
    padding: 5rem 2rem 0 2em;
  }
  @media (min-width: 1440px) {
    padding: 2rem 12rem 0 12em;
  }
`;

export const TitleAndRating = styled.div`
  justify-content: space-around;
  display: flex;
  gap: 2em;
  margin-bottom: 2em;
`;

export const TagsField = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_3};
  border-radius: 5px;

  display: flex;
  gap: 0.5em;

  padding: 1em;
`;
