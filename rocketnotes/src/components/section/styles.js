import styled from "styled-components";

export const Container = styled.section`
  margin: 5.6rem 0 2.8rem;
  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;

    border-bottom-color: ${({ theme }) => theme.COLORS.GRAAY_100};
    font-size: 2rem;
    font-weight: 400;
  }
`;
