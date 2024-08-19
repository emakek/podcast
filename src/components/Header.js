import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="logoyoutube.png" alt="Logo" className="logo" />
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <img src="avatar.png" alt="Perfil" className="profile-pic" />
    </header>
  );
};

export default Header;
