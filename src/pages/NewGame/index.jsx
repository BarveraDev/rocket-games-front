import { Container, Section, TitleAndRating, TagsField } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";

export function NewGame() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [rating, setRating] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title || !description || !rating) {
      return alert("You forgot a field!");
    }
    if (newTag) {
      return alert("You forgot a field!");
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });
    alert("New note added");
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Do you want cancel this action?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header />
      <Section>
        <div className="top">
          <a href="/">
            <FiArrowLeft className="arrow" />
            Voltar
          </a>
        </div>

        <h2>Novo Jogo</h2>

        <TitleAndRating>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            onChange={(e) => setRating(e.target.value)}
          />
        </TitleAndRating>

        <Textarea
          placeholder="Observações"
          className="textArea"
          onChange={(e) => setDescription(e.target.value)}
        />

        <h3>Marcadores</h3>

        <TagsField>
          {tags.map((tag, index) => (
            <NoteItem
              key={String(index)}
              value={tag}
              onClick={() => {
                handleRemoveTag(tag);
              }}
            />
          ))}
          <NoteItem
            isNew
            placeholder="Nova tag"
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
          />
        </TagsField>

        <div className="saveAndDelete">
          <Button title={"Excluir"} isDelete onClick={handleRemove} />
          <Button title={"Salvar "} onClick={handleNewNote} />
        </div>
      </Section>
    </Container>
  );
}
