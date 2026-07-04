import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="fl">
        <img src={logo} alt="LF Veículos" />
      </div>
      <p>© 2026 LF Veículos — Extrema, MG. Todos os direitos reservados.</p>
      <div className="fright">
        <a href="#estoque">Estoque</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#contato">Contato</a>
      </div>
    </footer>
  );
};

export default Footer;
