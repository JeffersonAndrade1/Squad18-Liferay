import React, { useState } from "react";
import cachorro from "../assets/cachorro.png";
import "../styles/Community.css"

const Community = () => {
  return (
    <div className="community-container3">
      <div className="title3">
        <span>Cachorro</span>
      </div>
      <div className="community-body3">
        <img src={cachorro} width="100%" alt="" />
      </div>
      <div className="community-buttons3">
        <button className="community-button3">Entrar</button>
        <button className="community-button3">Detalhes</button>
      </div>
    </div>
  );
};

export default Community;
