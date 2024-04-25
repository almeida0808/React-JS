import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles";
import { Header } from "../../components/header";
import { Tags } from "../../components/tags";

export function Home() {
  return(
<Container>
<Brand>
<h1>RocketNotes</h1>
</Brand>
<Header/>
<Menu>
<li>Todos</li>
<li>Frontend</li>
<li>Node</li>
<li>React</li>

</Menu>

<Search>

</Search>

<Content>

</Content>

<NewNotes>

</NewNotes>
</Container>

  )
}
