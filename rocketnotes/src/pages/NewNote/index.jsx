import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea} from "../../components/text-area"
import { Section } from "../../components/section";
import { NoteItem } from "../../components/note-item";

export function NewNote() {
  return(
<Container>
<Header />

<main>
<Form>
<header>
  <h1>Criar Nota</h1>
    <a href="/">voltar</a>
</header>
<Input placeholder="Título"/>
<TextArea placeholder="Observações"/>

<Section title="links úteis">
<NoteItem value="almeida.dev"/>
<NoteItem isNew placeholder="Novo link"/>
</Section>
</Form>

</main>
</Container>

  )
}
