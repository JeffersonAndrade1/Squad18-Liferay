import React from "react";
import "../styles/TelaFeed.css";
import Buttons from "../componets/Buttons";
import Navbar from "../componets/Navbar";
import Recomendados from "../componets/Recomendados";
import Posts from "../componets/Posts";

function TelaFeed() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <Buttons />
      </div>
      <div>
        <Recomendados />
      </div>
      <div>
        <Posts />
      </div>
    </section>
  );
}

export default TelaFeed;
