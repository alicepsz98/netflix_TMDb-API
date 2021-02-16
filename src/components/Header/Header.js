import React from 'react';
import { HeaderContainer } from './styles';

function Header() {

  return (
    <HeaderContainer>
      <div>
        <a href='#'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Logo da Netflix' />
        </a>
        <a href='#'>
          <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='Perfil' />
        </a>
      </div>
    </HeaderContainer>
  );

}

export default Header;