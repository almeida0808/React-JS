import { Container, Form ,Background} from "./styles";
import { FiLogIn, FiMail, FiLock ,FiUser} from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function SignUp() {
  return (
    <Container>
      <Background/>

      <Form>
        <div id="title">
          <h1>Rocket Notes</h1>
          <span>Aplicação para salvar e gerenciar seus links úteis.</span>
        </div>

        <h2>Crie sua Conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar"></Button>

        <a href="youtube.com">Volte para o login</a>
      </Form>

    </Container>
  );
}
