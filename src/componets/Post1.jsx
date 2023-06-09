import React, { useState } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import "../styles/Post1.css";
import fotoperfil from "../assets/fotoperfil.png";

const Post1 = () => {
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
    <div className="post-wrapper">
      <div className="post-container1">
        <div className="user-photo-container1">
          <img src={fotoperfil} alt="Foto do Usuário" className="user-photo1" />
        </div>
        <div className="post1">
          <div className="user-info1">
            <span className="post-info1">
              <span className="post-info-user1">João Guilherme </span>
              <span className="post-info-text1">publicou em</span>
              <span className="post-info-community1"> Galera dos games</span>
              <span className="post-info-divider1"></span>
            </span>
          </div>
          <div className="post-content1">
            <p>Acabei de comprar esse jogão!</p>
            <img
              src="https://files.tecnoblog.net/wp-content/uploads/2022/06/marvels-spider-man-003.png"
              alt="Imagem do Post"
              className="post-image1"
            />
          </div>
          <div className="post-actions1">
            <button
              className={`like-button1 ${liked ? "liked1" : ""}`}
              onClick={handleLike}
            >
              <FaThumbsUp />
            </button>
            <button className="comment-button1" onClick={handleComment}>
              <FaComment />
            </button>
          </div>
          {showCommentInput && (
            <div className="comment-section1">
              <div className="comment-list1">
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item1">
                    <img
                      src={fotoperfil}
                      alt="Foto do Usuário"
                      className="user-photo1"
                    />
                    <span className="comment-user1">{comment.user}: </span>
                    {comment.comment}
                  </div>
                ))}
              </div>
              <form onSubmit={handleAddComment}>
                <div className="comment-input-container1">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="comment-input1"
                    placeholder="Digite seu comentário"
                  />
                  <button type="submit" className="send-button1">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post1;
