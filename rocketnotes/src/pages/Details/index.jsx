import { Container, Links} from "./styles"; // quando importamos o arquivo de css , ele automaticamente já aplica todas estilizações
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section} from "../../components/section";
import { Tags } from "../../components/tags";
import { TextButton } from "../../components/text-button";

export function Details() {
  return (
    // existe uma regra no react que faz com o nosso componente retorne apenas um elemento, pra resolver isso podemos ultilizzar o fragment ,que ser ve como um emmbrulhador , sintax fragment =  <> </> ou podemos usar uma div.

    // dentro do return fica o conteudo da nossa interface

    <Container>
      <Header />

      <TextButton title="Excluir Nota"/>
      <Section title="Link úteis">
        
        <Links>
          <li>
            <a href="https://www.rocketseat.com.br/">link 1</a>
          </li>
          <li>
            <a href="https://www.youtube.com.br/">https://www.youtube.com.br/</a>
          </li>
          <li>
            <a href="https://www.instagram.com.br/">https://www.instagram.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
<Tags title="Ação"/>
<Tags title="Terror"/>
<Tags title="Luta"/>

      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
