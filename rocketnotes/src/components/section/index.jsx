import styled from "styled-components";
import { Container } from "../section/styles";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
