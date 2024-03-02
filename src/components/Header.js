import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import SearchBar from './SearchBar';
import AtmosKajaLogo from '../assets/AtmosKajaLogoHome.png'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={AtmosKajaLogo}
          className="logo"
          alt="AtmosKaja Logo"
          style={{ width: '400px', height: 'auto' }}
        />
      </Link>
      <SearchBar className="search" />
    </div>
  );
};

export default Header;
