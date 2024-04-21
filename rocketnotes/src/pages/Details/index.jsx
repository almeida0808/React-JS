import { Container } from "./styles"; // quando importamos o arquivo de css , ele automaticamente já aplica todas estilizações
import { Button } from "../../components/button";
import { Header } from "../../components/header";
export function Details() {
  return (
    // existe uma regra no react que faz com o nosso componente retorne apenas um elemento, pra resolver isso podemos ultilizzar o fragment ,que ser ve como um emmbrulhador , sintax fragment =  <> </> ou podemos usar uma div.

    // dentro do return fica o conteudo da nossa interface
    <Container>
<Header/>
      <Button title="Login" />
    
    </Container>
  );
}
