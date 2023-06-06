import React, { useState, useEffect } from "react";
import "../styles/Recomendados.css";

const ComunidadesComponent = () => {
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    const comunidadesArray = [
      {
        nome: "Galera dos games",
        foto: "https://i.pinimg.com/736x/ac/fd/a8/acfda88101fa9029e571343ddb431eb4.jpg",
        categoria: "Jogos",
      },
      {
        nome: "Clube do Livro",
        foto: "https://cheirodelivro.com/wp-content/uploads/2018/01/books.jpg",
        categoria: "Literatura",
      },
      {
        nome: "Fotografias Legais",
        foto: "https://camera.web2duo.com/wp-content/uploads/2021/06/Quais-as-cameras-profissionais-do-momento-foto-por-reinhart-julian-1024x683-1.jpeg",
        categoria: "Arte",
      },
      {
        nome: "Corrida e atletismo",
        foto: "https://cdn.atletis.com.br/atletis-website/base/843/bef/acc/corrida-intervalada-treino.jpg",
        categoria: "Esportes",
      },
      {
        nome: "Amantes da Dança",
        foto: "https://e0.pxfuel.com/wallpapers/154/1012/desktop-wallpaper-tango-twisted-fate-evelynn-lol-splash-art-league-of-legends.jpg",
        categoria: "Arte",
      },
      {
        nome: "Clube do xadrez!",
        foto: "https://images7.alphacoders.com/415/415175.jpg",
        categoria: "Jogos",
      },
      {
        nome: "Galera dos animes",
        foto: "https://w.forfun.com/fetch/89/898282fa13d69f3c3700ff76595f4e40.jpeg",
        categoria: "Animação",
      },
      {
        nome: "Grupo de Trilhas",
        foto: "https://img.nsctotal.com.br/wp-content/uploads/legacy/s3fs-public/graphql-upload-files/caminhada%20trilha%20ecologica_1.jpg",
        categoria: "Esportes",
      },
      {
        nome: "Clube de Culinária",
        foto: "https://aodisseia.b-cdn.net/wp-content/uploads/2022/08/ratatouille-filme-pixar-curiosidades-11.jpg",
        categoria: "Culinária",
      },
      {
        nome: "Cineastras",
        foto: "https://st4.depositphotos.com/1105977/21051/i/600/depositphotos_210519394-stock-photo-vintage-film-claper-with-film.jpg",
        categoria: "Filme",
      },
    ];

    const shuffledComunidades = comunidadesArray.sort(
      () => Math.random() - 0.5
    );
    const selectedComunidades = shuffledComunidades.slice(0, 5);

    setComunidades(selectedComunidades);
  }, []);

  return (
    <div className="comunidades-container">
      <h4>Conheça essas comunidades</h4>
      {comunidades.map((comunidade, index) => (
        <div className="comunidade-item" key={index}>
          <div className="aaa">
            <img
              className="comunidade-imagem"
              src={comunidade.foto}
              alt={comunidade.nome}
            />
            <div className="comunidade-info">
              <h3 className="comunidade-nome">{comunidade.nome}</h3>
              <p className="comunidade-categoria">{comunidade.categoria}</p>
            </div>
          </div>
          <span className="conheca-btn">conheça</span>
        </div>
      ))}
    </div>
  );
};

export default ComunidadesComponent;
