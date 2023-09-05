import React, { useState } from "react";
import { RatingContainer, StarIcon } from "./styles";

export const Rating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (star) => {
    setRating(star);
    onRatingChange(star);
  };

  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          active={star <= rating}
          onClick={() => handleStarClick(star)}
        >
          &#9733;
        </StarIcon>
      ))}
    </RatingContainer>
  );
};
