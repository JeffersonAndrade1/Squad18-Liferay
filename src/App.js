import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import TelaFeed from "./pages/TelaFeed";
import MinhasComunidades from "./pages/MinhasComunidades";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TelaFeed />} />
          <Route path="/MinhasComunidades" element={<MinhasComunidades />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
