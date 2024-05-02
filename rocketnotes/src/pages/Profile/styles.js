import styled from "styled-components";
import backgroundImg from "../../assets/3d-rendering-astronaut.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 3rem;

  > #alterarSenha {
    margin-top: 3rem;
  }
`;
