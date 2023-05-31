import fotoperfil from "../assets/fotoperfil.png"
import logobranca from "../assets/logobranca.png"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <div className="container-bar">
            <img src={logobranca} alt="Logo Liferay" className="logo" />
            <img src={fotoperfil} alt="Foto Perfil" className="perfil" />
        </div>
    );
}

export default Navbar;