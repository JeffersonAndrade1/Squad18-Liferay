import React from "react";
import Buttons from "../componets/Buttons";
import Navbar from "../componets/Navbar";
import Recomendados from "../componets/Recomendados";
import Community from "../componets/Community";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import "../styles/TelaPesquisa.css";

function TelaPesquisa() {
  return (
    <section className="tela-pesquisa-container">
      <div className="tela-pesquisa-content">
        <Navbar />
        <Buttons />
        <Recomendados />
        <div className="section-content">
          <div className="search-box">
            <input type="text" placeholder="Cachorro" />
            <div className="search-icon">
              <RiSearch2Line size={22} />
            </div>
          </div>
          <div className="filters">
            <div className="filter filter-AZ">
              <span>Filtrar A a Z</span>
              <HiOutlineChevronDown size={22} color="white" />
            </div>
            <div className="filter filter-member">
              <span>Filtrar por membros</span>
              <HiOutlineChevronDown size={22} color="white" />
            </div>
          </div>
          <Community />
        </div>
      </div>
    </section>
  );
}

export default TelaPesquisa;
