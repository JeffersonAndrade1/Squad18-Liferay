import React, { useState } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import "../styles/Posts.css";
import fotoperfil from "../assets/fotoperfil.png";

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
    <div className="post-container">
      <div className="user-photo-container">
        <img src={fotoperfil} alt="Foto do Usuário" className="user-photo" />
      </div>
      <div className="post">
        <div className="user-info">
          <span className="post-info">
            <span className="post-info-user">João Guilherme </span>
            publicou em
            <span className="post-info-community"> Galera dos games</span>
            <span className="post-info-divider"></span>
          </span>
        </div>
        <div className="post-content">
          <p>Acabei de comprar esse jogão!</p>
          <img
            src="https://files.tecnoblog.net/wp-content/uploads/2022/06/marvels-spider-man-003.png"
            alt="Imagem do Post"
            className="post-image"
          />
        </div>
        <div className="post-actions">
          <button
            className={`like-button ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            <FaThumbsUp />
          </button>
          <button className="comment-button" onClick={handleComment}>
            <FaComment />
          </button>
        </div>
        {showCommentInput && (
          <div className="comment-section">
            <div className="comment-list">
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <img
                    src={fotoperfil}
                    alt="Foto do Usuário"
                    className="user-photo"
                  />
                  <span className="comment-user">{comment.user}: </span>
                  {comment.comment}
                </div>
              ))}
            </div>
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comente..."
              />
              <button type="submit" className="send-button">
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
