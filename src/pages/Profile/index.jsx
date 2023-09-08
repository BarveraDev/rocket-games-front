import { Container, Header, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonWithText } from "../../components/ButtonWithText";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function handleUpdateProfile() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    await updatedProfile({ user });
  }

  return (
    <Container>
      <Header>
        <ButtonWithText title={"Voltar"} path={"/"} icon={FiArrowLeft} />
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

        <Input
          icon={FiUser}
          placeholder="Nome de usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Senha Atual"
          onChange={(e) => setOldPassword(e.target.value)}
          type="password"
        />
        <Input
          icon={FiLock}
          placeholder="Senha Antiga"
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
        />

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
