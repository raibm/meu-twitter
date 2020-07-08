import React from 'react';

import Main from '../Main';

import { Container, Wrapper } from './styles';

const layouts: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar/> */}
        <Main/>
        {/* <SideBar/> */}
      </Wrapper>
    </Container>
  );
}

export default layouts;
