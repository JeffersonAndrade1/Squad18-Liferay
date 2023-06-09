import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import TelaFeed from "./pages/TelaFeed";
import MinhasComunidades from "./pages/MinhasComunidades";
import TelaLogin from "./pages/TelaLogin";
import CriarComunidade from "./pages/CriarComunidade";
import TelaPesquisa from "./pages/TelaPequisa";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/Feed" element={<TelaFeed />} />
          <Route path="/Comunidades" element={<MinhasComunidades />} />
          <Route path="/Criar" element={<CriarComunidade />} />
          <Route path="/Pesquisa" element={<TelaPesquisa/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
