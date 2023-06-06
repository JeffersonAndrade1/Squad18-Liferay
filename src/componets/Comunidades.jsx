import React, { useState } from "react";
import "../styles/Comunidades.css"

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    setShowCommentInput(!showCommentInput);
    setComment("");
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, { user: "Paulo Souza", comment: comment }]);
      setComment("");
    }
  };

  return (
    <div className="post-container2">
      <div className="post2">
        <div className="user-info">
          <span className="post-info">
            <span className="post-info-user2">Clube do xadrez</span>
            <span className="post-info-divider2"></span>
          </span>
        </div>
        <div className="post-content2">
          <img
            src="https://images7.alphacoders.com/415/415175.jpg"
            alt="Imagem da comunidade"
            className="post-image2"
          />
          <div className="divider2"></div>
        </div>
        <div className="post-actions">
          <button className="like-button2">
            <p>Acessar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
