import { Container, Title, Description, TagsField } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";
import React, { useState } from "react";

export function MovieCard({ title, desc }) {
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };
  return (
    <Container>
      <a href="">
        <Title>{title}</Title>
      </a>
      <Rating initialRating={userRating} onRatingChange={handleRatingChange} />
      <Description>{desc}</Description>
      <TagsField>
        <Tag title={"fiction"} />
        <Tag title={"love"} />
        <Tag title={"terror"} />
      </TagsField>
    </Container>
  );
}
