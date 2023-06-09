import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CriarComunidades.css";
import Navbar from "../componets/Navbar.jsx";
import Buttons from "../componets/Buttons.jsx";
import Recomendados from "../componets/Recomendados.jsx";

function CriarComunidades() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <section>
      <div>
        <Navbar />
        <Buttons />
        <Recomendados />
      </div>
      <div className="criacao-container">
        <div className="criacao-container2">
          <div className="nome-comunidade">
            <input type="text" placeholder="Nome da Comunidade" />
          </div>
          <div className="endereco-criar">
            <input type="text" placeholder="País" />
            <input type="text" placeholder="Estado" />
            <input type="text" placeholder="Cidade" />
          </div>
          <div className="descricao-criar">
            <textarea placeholder="Descrição da Comunidade" rows="5"></textarea>
          </div>
          <div className="foto-criacao">
            <input type="file" accept="image/*" />
          </div>
          <div className="tipo-criacao">
            <label
              className={`option ${
                selectedOption === "presencial" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="tipo-comunidade"
                value="presencial"
                checked={selectedOption === "presencial"}
                onChange={() => handleOptionSelect("presencial")}
              />
              <span></span>
              Presencial
            </label>
            <label
              className={`option ${
                selectedOption === "online" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="tipo-comunidade"
                value="online"
                checked={selectedOption === "online"}
                onChange={() => handleOptionSelect("online")}
              />
              <span></span>
              Online
            </label>
          </div>
          <div className="criar-button">
            <button>Criar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CriarComunidades;
