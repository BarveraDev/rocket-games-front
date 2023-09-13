import { Container, Header, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonWithText } from "../../components/ButtonWithText";
import avatarPlaceholder from "../../assets/avatar_placeholder (1).svg";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUlr = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUlr);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updatedProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header>
        <ButtonWithText title={"Voltar"} path={"/"} icon={FiArrowLeft} />
      </Header>

      <Form>
        <Avatar>
          <img src={avatar} alt="minha foto de perfil" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
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
