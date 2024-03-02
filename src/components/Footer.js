

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
      
      <div className="footer-section footer-section-middle">


      </div>
      
      <div className="footer-section footer-section-right">
        <h4>Kontakt</h4>
        <p><a href='https://www.linkedin.com/in/evgeniy-khiznyak-9a61a6263/' className='Links'>LinkedIn</a> ja <a href='https://github.com/shenjakh' className='Links'>Github</a></p>
        <p><a href='' className=''></a></p>
        <p className='BottomRight'>evgenkhiznyak@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
