import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundBoxOffice, Form } from "./styles";
import {
  FiArrowRight,
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
} from "react-icons/fi";
import { api } from "../../service/api.js";
import { ButtonWithText } from "../../components/ButtonWithText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Please fill all required fields");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Successfully registered user");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Unable to register user");
        }
      });
  }

  return (
    <div>
      <BackgroundBoxOffice />
      <Form>
        <h1>rocketGames_</h1>
        <p>Uma aplicação para salvar seus games</p>

        <h2>Register</h2>

        <Input
          icon={FiUser}
          type="name"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
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

        <Button title={"Register"} icon={FiArrowRight} onClick={handleSignUp} />

        <ButtonWithText
          title={"Back to login"}
          icon={FiArrowLeft}
          path="/login"
        />
      </Form>
    </div>
  );
}
