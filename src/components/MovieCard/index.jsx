import { Container, Title, Description, TagsField } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function MovieCard({ title, desc }) {
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };
  return (
    <Container>
      <Title>
        <Link to="/preview/:id">{title}</Link>
      </Title>

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
