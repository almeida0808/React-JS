import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/header";
import { Tags } from "../../components/tags";
import { TextButton } from "../../components/text-button";
import { Button } from "../../components/button";

export function Home() {
  return(
<Container>
<Brand>
<h1>RocketNotes</h1>
</Brand>
<Header/>
<Menu>
<TextButton title="JavaScript" isactived/>
<TextButton title="Node"/>
<TextButton title="React"/>
<TextButton title="SQL"/>

</Menu>

<Search>

</Search>

<Content>

</Content>

<NewNotes>
<RiAddLine />
<p>Criar Nota</p>
</NewNotes>
</Container>

  )
}
