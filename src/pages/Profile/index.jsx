import { Container, Header, Form } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";

export function Profile() {
  return (
    <Container>
      <Header>
        <a href="">
          <FiArrowLeft className="arrow-left" />
          <span>Voltar</span>
        </a>
      </Header>

      <Form>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/106263458?s=400&u=db63c31eb01633a9dc52883e985b6804e8837ea2&v=4"
            alt="minha foto de perfil"
          />

          <Input icon={FiUser} placeholder="Nome de usuário" />
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha Atual" />
          <Input icon={FiLock} placeholder="Senha Antiga" />
        </div>
      </Form>
    </Container>
  );
}
