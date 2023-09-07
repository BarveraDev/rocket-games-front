import { Container, Profile, Brand } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Brand>
        <Link to="/home">rocketGames_</Link>
      </Brand>

      <Input
        type="input"
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        className="input"
      />

      <Profile>
        <div>
          <span>Luiz Paulo</span>
          <a>sair</a>
        </div>
        <Link to="/profile">
          <img
            src="https://avatars.githubusercontent.com/u/106263458?s=400&u=db63c31eb01633a9dc52883e985b6804e8837ea2&v=4"
            alt=""
          />
        </Link>
      </Profile>
    </Container>
  );
}