import { BackgroundBoxOffice, Form } from "./styles";
import {
  FiArrowRight,
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
} from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonWithText } from "../../components/ButtonWithText";

export function SignUp() {
  return (
    <div>
      <BackgroundBoxOffice />
      <Form>
        <h1>rocketGames_</h1>
        <p>Uma aplicação para salvar seus games</p>

        <h2>Crie sua conta</h2>

        <div className="inputs">
          <Input icon={FiUser} type="name" placeholder="Nome" />
          <Input icon={FiMail} type="email" placeholder="E-mail" />
          <Input icon={FiLock} type="password" placeholder="Password" />
        </div>

        <Button title={"Cadastrar"} icon={FiArrowRight} />

        <ButtonWithText
          title={"Voltar para tela de login"}
          icon={FiArrowLeft}
          to="/register"
        />
      </Form>
    </div>
  );
}
