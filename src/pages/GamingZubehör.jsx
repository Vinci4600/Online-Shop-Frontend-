import { useEffect, useState } from "react";
import "./components/styles/onlineshop.css";


function GamingZubehör(){
    const [gamingZubehör, setGamingzubehör] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/gamingzubehör/all")
      .then(res => res.json())
      .then(data => setGamingzubehör(data));
  
    },[]);

    return(
        <div className="filme-container">
            <h1 className="titel">Gaming Zubehör</h1>
            <div className="film-grid">
                {gamingZubehör.map((gamingZubehör) =>(
                    <div className="film-card" key={gamingZubehör.id}>
                         <h2>{gamingZubehör.produktname}</h2>
                         <p className="gamingzubehör-preis">{gamingZubehör.preis}.CHF</p>
                         <p className="gamingzubehör-beschreibung">{gamingZubehör.beschreibung}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default GamingZubehör;