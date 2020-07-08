import styled from "styled-components";
 
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media(min-width: 500px){
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }

`;
export const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;
  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

`;
export const BackIcon = styled.div``;
export const ProfileInfo = styled.div``;