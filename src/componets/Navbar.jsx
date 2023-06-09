import React from "react";
import fotoperfil from "../assets/fotoperfil.png";
import logobranca2 from "../assets/logobranca.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container-bar">
      <img src={logobranca2} alt="Logo Liferay" className="logo2" />
      <img src={fotoperfil} alt="Foto Perfil" className="perfil" />
    </div>
  );
}

export default Navbar;
