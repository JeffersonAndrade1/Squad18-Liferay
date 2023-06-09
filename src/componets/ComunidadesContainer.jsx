import React from "react";
import Comunidade from "../componets/Comunidades.jsx";
import "../styles/ComunidadesContainer.css";

function ComunidadesContainer() {
  return (
    <section>
      <div className="community-container">
        <div className="comunidade-wrapper">
          <Comunidade />
        </div>
        <div className="comunidade-wrapper">
          <Comunidade />
        </div>
        <div className="comunidade-wrapper">
          <Comunidade />
        </div>
        <div className="comunidade-wrapper">
          <Comunidade />
        </div>
        <div className="comunidade-wrapper">
          <Comunidade />
        </div>
      </div>
    </section>
  );
}

export default ComunidadesContainer;
