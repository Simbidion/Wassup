import React, { PropTypes } from 'react';
import './App.css';

const Background = ({ children }) => (
  <div className="Background">{children}</div>
);

Background.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Background;
