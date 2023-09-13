import { Container, Title, Description, TagsField } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function MovieCard({ title, rating, desc, tags, onClick }) {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>

      <Rating initialRating={rating} />
      <Description>{desc}</Description>
      <TagsField>
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </TagsField>
    </Container>
  );
}
