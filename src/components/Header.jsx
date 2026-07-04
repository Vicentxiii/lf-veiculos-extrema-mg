import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="LF Veículos" className="logo-img" />
      </div>
      <nav>
        <a className="navlink" href="#estoque">Estoque</a>
        <a className="navlink" href="#diferenciais">Diferenciais</a>
        <a className="navlink" href="#contato">Contato</a>
        <a className="btn-glass" href="https://wa.me/5535998259732" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
      </nav>
    </header>
  );
};

export default Header;
