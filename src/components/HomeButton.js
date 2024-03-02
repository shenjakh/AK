
import React from 'react';
import '../styles/HomeButton.css'

const HomeButton = () => {
  return (
    <button onClick={() => window.location.href = '/'} className="homeButton">
      Esilehele
    </button>
  );
};

export default HomeButton;
