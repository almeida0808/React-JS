import "./styles.css" // quando importamos o arquivo de css , ele automaticamente já aplica todas estilizações

export function Details() {
  return (// existe uma regra no react que faz com o nosso componente retorne apenas um elemento, pra resolver isso podemos ultilizzar o fragment ,que ser ve como um emmbrulhador , sintax fragment =  <> </> ou podemos usar uma div.

    // dentro do return fica o conteudo da nossa interface
    <>
      <h1>Rocket Notes</h1>
      <span>esse são os detalhes da nossa API</span>
    </>
  );
}