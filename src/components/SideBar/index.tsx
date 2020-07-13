import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
             <FollowSuggestion
              name="Inês Bizerra"
              nickname='@inesbizerra'
            />,
             <FollowSuggestion
              name="Ademir Maciel"
              nickname='@ademirmaciel'
            />,
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;