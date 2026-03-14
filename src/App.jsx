import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";

function App() {
  return (
    <>
      <nav className="task">
        <Link to="/">Home</Link>
        <Link to="/filme">Filme</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme" element={<Filme />} />
      </Routes>
    </>
  );
}

export default App;