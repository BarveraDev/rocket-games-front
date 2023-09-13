import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Movie,
  Title,
  ProfileInfo,
  TagsField,
  TextField,
  Links,
} from "./styles";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { ButtonWithText } from "../../components/ButtonWithText";

export function GamePreview() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fecthNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fecthNotes();
  }, []);

  function formatTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function formatDate(dateTimeString) {
    const dateTimeParts = dateTimeString.split(" ");
    const date = dateTimeParts[0];
    return date;
  }

  async function handleRemoveNote() {
    const confirm = window.confirm(
      "Are you sure you want to remove this note?"
    );

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  return (
    <Container>
      <Header />
      {data && (
        <Movie>
          <Links className="teste">
            <a href="/">
              <FiArrowLeft />
              Voltar
            </a>
            <ButtonWithText title={"Delete note"} onClick={handleRemoveNote} />
          </Links>

          <Title>
            <h2>{data.title}</h2>
            <Rating initialRating={data.rating} />
          </Title>

          <ProfileInfo>
            <img
              src="https://avatars.githubusercontent.com/u/106263458?s=400&u=db63c31eb01633a9dc52883e985b6804e8837ea2&v=4"
              alt=""
            />
            <div className="profile">
              <span>por</span>
              <span>{user.name}</span>
            </div>
            <FiClock className="clock" />
            <div className="time">
              <span>{formatDate(data.created_at)}</span>
              <span>às</span>
              <span>{formatTime(data.created_at)}</span>
            </div>
          </ProfileInfo>

          {data.tags && (
            <TagsField>
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </TagsField>
          )}

          <TextField>
            <text>{data.description}</text>
          </TextField>
        </Movie>
      )}
    </Container>
  );
}
