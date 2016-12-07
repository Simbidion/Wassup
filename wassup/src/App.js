import React, { PropTypes } from 'react';
import './App.css';

const Background = ({ children }) => (
  <div className="Background">{children}</div>
);

Background.propTypes = {
  children: PropTypes.object.isRequired,
};

const App = () => (
  <Background>
    <h2>Welcome to Wassup</h2>
  </Background>
);

export default App;
