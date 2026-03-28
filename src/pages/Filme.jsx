import { useEffect, useState } from "react";
import "./components/styles/onlineshop.css";

function Filme() {

  const [filme, setFilme] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/filme/all")
      .then(res => res.json())
      .then(data => setFilme(data));
  }, []);
  

  return (
    <div className="filme-container">
      <h1 className="titel">Filme</h1>

      <div className="film-grid">
        {filme.map((film) => (
          <div className="film-card" key={film.id}>

            <h2>{film.titel}</h2>

            <p className="film-jahr">{film.erscheinungsjahr}</p>

            <p className="film-beschreibung">{film.beschreibung}</p>

            <p className="film-preis">{film.preis} €</p>

            <iframe
              src={`https://www.youtube.com/embed/${film.trailerUrl}`}
              title={film.titel}
              allowFullScreen
            ></iframe>
            <button className="shopbutton">In den Warenkorb</button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Filme;