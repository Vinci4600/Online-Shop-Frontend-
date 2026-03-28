import { useEffect, useState } from "react";
import "./components/styles/onlineshop.css";


function GamingZubehör() {
    const [gamingZubehör, setGamingzubehör] = useState([]);
    

    const BASE_URL = "http://localhost:8080";

    useEffect(() => {
        fetch("http://localhost:8080/gamingzubehör/all")
            .then(res => res.json())
            .then(data => setGamingzubehör(data))
            .catch(err => console.error(err));

    }, []);

    return (
        <div className="filme-container">
            <h1 className="titel">Gaming Zubehör</h1>
            <div className="film-grid">
                {gamingZubehör.map((gamingZubehör) => (
                    <div className="film-card" key={gamingZubehör.id}>
                        <h2>{gamingZubehör.produktname}</h2>
                        <img
                            src={`${BASE_URL}${gamingZubehör.imageUrl}`}
                            alt={gamingZubehör.titel}
                            width={200}
                        />
                        <p className="gamingzubehör-preis">{gamingZubehör.preis}.€</p>
                        <p className="gamingzubehör-beschreibung">{gamingZubehör.beschreibung}
                            <br></br>
                             <br></br>
                             <button className="shopbutton">In den Warenkorb</button>
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default GamingZubehör;