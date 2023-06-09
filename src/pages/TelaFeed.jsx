import React from "react";
import "../styles/TelaFeed.css";
import Buttons from "../componets/Buttons";
import Navbar from "../componets/Navbar";
import Recomendados from "../componets/Recomendados";
import PostContainer from "../componets/PostContainer";
import Post1 from "../componets/Post1";

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
        <PostContainer />
      </div>
    </section>
  );
}

export default TelaFeed;
