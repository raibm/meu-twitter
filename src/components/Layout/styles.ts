import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  /**margem para cima, baixo e direita esquerda*/
  margin: 0 auto;

  /**display flex permita colocar componentes lado a lado tipo 1,2,3...  */
  display: flex;
  /**alinha todo mundo de forma horizontal */
  justify-content: center;
`;