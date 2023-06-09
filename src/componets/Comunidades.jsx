import React from "react";
import "../styles/Comunidades.css";

const Comunidade = () => {
  return (
    <div className="comunidade-container2">
      <div className="comunidade2">
        <div className="user-info">
          <span className="comunidade-info">
            <span className="comunidade-info-user2">Galera dos games</span>
            <span className="comunidade-info-divider2"></span>
          </span>
        </div>
        <div className="comunidade-content2">
          <img
            src="https://i.pinimg.com/736x/ac/fd/a8/acfda88101fa9029e571343ddb431eb4.jpg"
            alt="Imagem da comunidade"
            className="comunidade-image2"
          />
          <div className="divider2"></div>
        </div>
        <div className="comunidade-actions">
          <button className="acessar-button2">Acessar</button>
          <button className="sair-button2">Sair</button>
        </div>
      </div>
    </div>
  );
};

export default Comunidade;
