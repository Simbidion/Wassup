import React from 'react';
import facebook from './facebook.gif';
import instagram from './instagram.gif';
import './App.css';

const SocialIcons = () => (
  <div className="SocialIcons">
    <img className="SocialIcon" alt="Facebook Logo" src={facebook} />
    <img className="SocialIcon" alt="Instagram Logo" src={instagram} />
  </div>
);

export default SocialIcons;
