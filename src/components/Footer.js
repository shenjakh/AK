

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section footer-section-left">
        
        <h4 className='title'>ATMOSKAJA toiteallikatena on</h4>

        <p><a href='https://open-meteo.com/' className='Links'>Open Meteo </a> ja <a href='https://ilm.ee/' className='Links'>ILM.ee</a></p>

        <br />

        <div className='BottomLeft'>
        <p className='Editor'>Kujundas Evgeniy Khiznyak</p>
        <p>ATMOSKAJA © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
