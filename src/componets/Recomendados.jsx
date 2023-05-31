import React, { useState, useEffect } from "react";
import "../styles/Recomendados.css";

const ComunidadesComponent = () => {
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    const comunidadesArray = [
      {
        nome: "Galera dos games",
        foto: "https://cultura.uol.com.br/upload/tvcultura/esporte/20220720150044_gettyimages-1334436084-1-1-.jpg",
      },
      {
        nome: "Clube do Livro",
        foto: "https://viverdeblog.com/wp-content/uploads/2017/04/como-escrever-um-livro-topo.png",
      },
      {
        nome: "Fotografia Criativa",
        foto: "https://s2.glbimg.com/w4RzzBoJ99NlYTdreLXVHqujv4c=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/4/F/YV0FQOQ9GBbMQeLCAixA/foto-camera.jpeg",
      },
      {
        nome: "Corrida e atletismo",
        foto: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3200941:1646700007/shutterstock_776440840.jpg?f=16x9&h=240&w=425&$p$f$h$w=d5bc0bc",
      },
      {
        nome: "Amantes da Dança",
        foto: "data:image/jpeg;base64,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",
      },
      {
        nome: "Clube do xadrez!",
        foto: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/8106490939eee9974a0f617dfe155564.jpg",
      },
      {
        nome: "Galera dos animes",
        foto: "https://t.ctcdn.com.br/-jRX-9m58XZ2bTM0qcuI-Pp0fI4=/340x265:1654x1005/720x405/smart/filters:format(webp)/i521747.jpeg",
      },
      {
        nome: "Grupo de Trilhas",
        foto: "https://conteudo.imguol.com.br/c/entretenimento/80/2021/02/26/roupas-e-acessorios-fazem-diferenca-na-hora-de-fazer-trilha-1614318109736_v2_615x300.jpg",
      },
      {
        nome: "Clube de Culinária",
        foto: "https://aodisseia.b-cdn.net/wp-content/uploads/2022/08/ratatouille-filme-pixar-curiosidades-11.jpg",
      },
      {
        nome: "Amantes da musica",
        foto: "https://cdn-icons-png.flaticon.com/512/1987/1987997.png",
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
      
      {comunidades.map((comunidade, index) => (
        <div className="comunidade-item" key={index}>
          <div className="aaa">
            <img
              className="comunidade-imagem"
              src={comunidade.foto}
              alt={comunidade.nome}
            />
            <p>{comunidade.nome}</p>
          </div>
          <span className="conheca-btn">conheça!</span>
        </div>
      ))}
    </div>
  );
};

export default ComunidadesComponent;
