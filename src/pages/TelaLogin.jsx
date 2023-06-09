import React from "react";
import liferayray from "../assets/liferay-ray.png";
import logobranca from "../assets/logobranca.png";
import "../styles/TelaLogin.css";
import { useNavigate } from "react-router-dom";

function TelaLogin() {
  const navigate = useNavigate();

  const handleConectar = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "paulosouza@liferay.com" && password === "1234") {
      navigate("/Feed");
    } else {
      alert("Credenciais incorretas. Por favor, tente novamente.");
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="bloco-imagem">
          <img src={liferayray} alt="Mascote Ray" className="ray" />
        </div>
      </div>

      <div className="bloco-direito">
        <img src={logobranca} alt="Logo Liferay" className="logo" />
        <form className="login-form">
          <label htmlFor="email" className="login-label">
            E-mail Corporativo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className="login-input"
          />
          <label htmlFor="password" className="login-label">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            className="login-input"
          />
          <div className="captcha">
            <input type="checkbox" id="keep-logged" name="keep-logged" />
            <label htmlFor="keep-logged">Lembre de mim</label>
          </div>
          <button
            type="button"
            onClick={handleConectar}
            className="btnConectar"
          >
            Conectar
          </button>
        </form>
      </div>
    </section>
  );
}

export default TelaLogin;
