import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import TelaFeed from "./pages/TelaFeed";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TelaFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
