import { Container, Content, Section, MovieSection } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { MovieCard } from "../../components/MovieCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get("/notes");
      setNotes(response.data);
    }
    fetchNotes();
  }, []);

  function handleNavigate(id) {
    navigate(`/preview/${id}`);
  }

  return (
    <Container>
      <Header />
      <Content>
        <h2>Meus jogos</h2>
        <div>
          <Button title={"Adicionar jogo"} icon={FiPlus} path={"/new"} />
        </div>
      </Content>

      <Section>
        <MovieSection>
          {notes.map((note) => (
            <MovieCard
              key={note.id}
              title={note.title}
              desc={note.description}
              rating={note.rating}
              tags={note.tags}
              onClick={() => handleNavigate(note.id)}
            />
          ))}
        </MovieSection>
      </Section>
    </Container>
  );
}
