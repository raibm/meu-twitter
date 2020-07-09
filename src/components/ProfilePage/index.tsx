import React from 'react';
import { 
  Container,
  Banner,
  Avatar,
  ProfileDate,
  LocationIcon,
  CakeIcon,
  Followage,

} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileDate>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Rai Bizerra Maciel</h1>
        <h1>@passfail3d</h1>

        <p>
          Developer at <a href="https://www.basis.com.br/">@Basis</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Espirito Santo, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 06 de junho de 1997
          </li>
        </ul>


        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
           <strong> 51</strong> seguidores 
          </span>
        </Followage>
      </ProfileDate>
    </Container>
  );
}

export default ProfilePage;