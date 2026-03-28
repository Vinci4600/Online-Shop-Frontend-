import { useEffect, useState } from "react";
import "./components/styles/onlineshop.css";

function Games() {

  const [games, setGames] = useState([]);
   const [titel, setTitel] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [preis, setPreis] = useState("");


  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetch("http://localhost:8080/games/all")
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error(err));

      
  }, []);
   

  return (
    <div className="homepage">
      <h1 className="titel">Games</h1>
      <div className="games-grid">
        {games.map((games) => (
          <div className="film-card">
            
            <img
              src={`${BASE_URL}${games.imageUrl}`}
              alt={games.titel}
              width={200}
            />
             <p>{games.beschreibung}</p>
            <p>{games.preis} €</p>
            <button className="shopbutton">In den Warenkorb</button>



          </div>
        ))}
      </div>
      
    </div>
   );
}

export default Games;
