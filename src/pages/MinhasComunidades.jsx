import "../styles/MinhasComunidades.css"
import Buttons from "../componets/Buttons.jsx"
import Navbar from "../componets/Navbar.jsx"
import Recomendados from "../componets/Recomendados.jsx"
import ComunidadesContainer from "../componets/ComunidadesContainer.jsx"


function MinhasComunidades() {
  return (
    <div>
        <Navbar />
        <Buttons />
        <Recomendados />
        <ComunidadesContainer />
    </div>
  );
}

export default MinhasComunidades;
