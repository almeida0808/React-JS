import { Container } from "./styles";

export function Header({name = "Lucas Almeida", ...rest}) {
  return <Container>
<div>
    <img src=""/>
   <a href="/">
    <span>Bem vindo,</span>
    <p>{name}</p>
   </a>
</div>

  </Container>;
}
