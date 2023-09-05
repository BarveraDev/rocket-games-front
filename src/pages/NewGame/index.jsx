import { Container, Section, TitleAndRating, TagsField } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function NewGame() {
  return (
    <Container>
      <Header />
      <Section>
        <div className="top">
          <FiArrowLeft className="arrow" />
          <a href="">Voltar</a>
        </div>

        <h2>Novo Jogo</h2>

        <TitleAndRating>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </TitleAndRating>

        <Textarea placeholder="Observações" className="textArea" />

        <h3>Marcadores</h3>

        <TagsField>
          <NoteItem value={"React"} />
          <NoteItem isNew placeholder="Nova tag" />
        </TagsField>

        <div className="saveAndDelete">
          <Button title={"Excluir"} isDelete />
          <Button title={"Salvar "} />
        </div>
      </Section>
    </Container>
  );
}
