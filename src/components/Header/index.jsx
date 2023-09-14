import { Container, Profile, Brand } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/avatar_placeholder (1).svg";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUlr = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Brand>
        <Link to="/">rocketGames_</Link>
      </Brand>

      <div className="divInput">
        <Input
          type="input"
          icon={FiSearch}
          placeholder="Pesquisar"
          className="input"
        />
      </div>

      <Profile>
        <div>
          <span>{user.name}</span>
          <a onClick={handleSignOut}>sair</a>
        </div>
        <Link to="/profile">
          <img src={avatarUlr} alt="" />
        </Link>
      </Profile>
    </Container>
  );
}
