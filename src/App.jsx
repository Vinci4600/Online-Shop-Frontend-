import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import GamingZubehör from "./pages/GamingZubehör";
import Games from "./pages/Games";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <>
      <nav className="task">
        <Link to="/">Home</Link>
        <Link to="/filme">Filme</Link>
        <Link to="/gamingzubehör">Gaming Zubehör</Link>
        <Link to="/games">Games</Link>
        <Link to="/login">Login</Link>
      
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme" element={<Filme />} />
        <Route path="/gamingzubehör" element={<GamingZubehör />} />
        <Route path="/games" element={<Games />}/>
        <Route path="/login" element={<Login />}/>
       
      </Routes>
    </>
  );
}

export default App;