import React from "react";
import Navbar from "./Navbar";
import Post1 from "./Post1";
import "../styles/PostContainer.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="posts-wrapper">
        <Post1 />
      </div>
      <div className="posts-wrapper">
        <Post1 />
      </div>
      <div className="posts-wrapper">
        <Post1 />
      </div>
      <div className="posts-wrapper">
        <Post1 />
      </div>
      <div className="posts-wrapper">
        <Post1 />
      </div>
    </div>
  );
};

export default App;
