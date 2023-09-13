import { useState } from "react";
import { FiArrowRight, FiMail, FiLock } from "react-icons/fi";
import { ButtonWithText } from "../../components/ButtonWithText";

import { BackgroundNeon, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
    navigate("/");
  }

  return (
    <div>
      <BackgroundNeon />
      <Form>
        <h1>rocketGames_</h1>
        <p>Uma aplicação para salvar seus games</p>

        <h2>Login</h2>

        <Input
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={"Login"} icon={FiArrowRight} onClick={handleSignIn} />

        <ButtonWithText title={"SignUp"} path="/" />
      </Form>
    </div>
  );
}
