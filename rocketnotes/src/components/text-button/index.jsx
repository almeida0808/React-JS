import { Container } from "../text-button/styles";

export function TextButton({ title, ...rest }) {
  return (
     
      <Container type="button"  {...rest}>
      {title}
    </Container>
  );
}
