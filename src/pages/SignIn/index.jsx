import { BackgroundNeon, Form } from "./styles";
import { FiArrowRight, FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonWithText } from "../../components/ButtonWithText";

export function SignIn() {
  return (
    <div>
      <BackgroundNeon />
      <Form>
        <h1>rocketGames_</h1>
        <p>Uma aplicação para salvar seus games</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Password" />

        <Button title={"Entrar"} icon={FiArrowRight} path={"/home"} />

        <ButtonWithText title={"Criar conta"} path="/register" />
      </Form>
    </div>
  );
}
