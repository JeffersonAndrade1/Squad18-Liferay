import "../styles/MinhasComunidades.css"
import Buttons from "../componets/Buttons.jsx"
import Navbar from "../componets/Navbar.jsx"
import Recomendados from "../componets/Recomendados.jsx"
import Comunidades from "../componets/Comunidades.jsx"


function MinhasComunidades() {
  return (
    <div>
        <Navbar />
        <Buttons />
        <Recomendados />
        <Comunidades />
    </div>
  );
}

export default MinhasComunidades;
