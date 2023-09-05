import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const StarIcon = styled.span`
  color: ${(props) => (props.active ? "gold" : "gray")};
  cursor: pointer;
  font-size: 25px;
  margin-right: 2px;
`;
