import { useEffect, useState } from "react";

function Filme() {

  const [filme, setFilme] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/filme/all")
      .then(res => res.json())
      .then(data => setFilme(data));
  }, []);

  return (
    <div>
      <h1>Filme</h1>

      {filme.map((film) => (
        <div key={film.id}>
          <h3>{film.titel}</h3>
          <p>{film.beschreibung}</p>
          <p>Jahr: {film.erscheinungsjahr}</p>
          <p>Preis: {film.preis} €</p>
        </div>
      ))}
    </div>
  );
}

export default Filme;