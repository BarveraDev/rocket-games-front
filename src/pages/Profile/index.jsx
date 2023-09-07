import { Container, Header, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonWithText } from "../../components/ButtonWithText";

export function Profile() {
  return (
    <Container>
      <Header>
        <ButtonWithText title={"Voltar"} path={"/home"} icon={FiArrowLeft} />
      </Header>

      <Form>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/106263458?s=400&u=db63c31eb01633a9dc52883e985b6804e8837ea2&v=4"
            alt="minha foto de perfil"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input icon={FiUser} placeholder="Nome de usuário" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha Atual" />
        <Input icon={FiLock} placeholder="Senha Antiga" />

        <Button title={"Salvar"} path={"/home"} />
      </Form>
    </Container>
  );
}
