import React, { useState } from "react";
import { FiHome, FiUsers, FiSearch, FiPlus } from "react-icons/fi";
import Buttons from "../styles/Buttons.css";

const HomeButton = ({ icon: Icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`home-button ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <Icon size={32} color="white" />
      {isHovered && <span className="text">{text}</span>}
    </div>
  );
};

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <HomeButton icon={FiHome} text="Inicio" className="btnHome" />
      <HomeButton icon={FiUsers} text="Comunidades" />
      <HomeButton icon={FiSearch} text="Pesquisar" />
      <HomeButton icon={FiPlus} text="Criar" />
    </div>
  );
};

export default ButtonContainer;
