import { Container, Form ,Background} from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TextButton } from "../../components/text-button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div id="title">
          <h1>Rocket Notes</h1>
          <span>Aplicação para salvar e gerenciar seus links úteis.</span>
        </div>

        <h2>Faça seu Login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar"></Button>

        <a href="youtube.com">Criar Conta</a>
      </Form>

      <Background/>
    </Container>
  );
}
