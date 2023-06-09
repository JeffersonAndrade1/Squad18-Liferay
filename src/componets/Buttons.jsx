import React, { useState } from "react";
import { FiHome, FiUsers, FiSearch, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/Buttons.css";

const HomeButton = ({ icon: Icon, text, to, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={to} className={`home-button ${isHovered ? "hovered" : ""} ${className}`}>
      <div
        className="button-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="icon-container">
          <Icon size={35} color="white" className="home-icon" />
        </div>
        <span className="text">{text}</span>
      </div>
    </Link>
  );
};

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <HomeButton
        icon={FiHome}
        text="Home"
        to="/Feed"
        className="btnHome"
      />
      <HomeButton
        icon={FiUsers}
        text="Comunidades"
        to="/Comunidades"
        className="btnComunidades"
      />
      <HomeButton
        icon={FiSearch}
        text="Pesquisa"
        to="/Pesquisa"
        className="btnPesquisa" 
      />
      <HomeButton
        icon={FiPlus}
        text="Criar"
        to="/Criar"
        className="btnCriar"
      />
    </div>
  );
};

export default ButtonContainer;
