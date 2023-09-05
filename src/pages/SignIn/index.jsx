import { BackgroundNeon, Form } from "./styles";
import { FiArrowRight, FiMail, FiLock } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <div>
      <BackgroundNeon />
      <Form>
        <h1>rocketGames_</h1>
        <p>Uma aplicação para salvar seus games</p>

        <h2>Faça seu login</h2>

        <div className="inputs">
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Password" />
        </div>

        <Button title={"Entrar"} icon={FiArrowRight} />

        <a to="">Criar conta</a>
      </Form>
    </div>
  );
}
