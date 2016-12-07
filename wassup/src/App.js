import React from 'react';
import Background from './Background';
import Container from './Container';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

const App = () => (
  <Background>
    <Container>
      <Logo />
      <SocialIcons />
    </Container>
  </Background>
);

export default App;
