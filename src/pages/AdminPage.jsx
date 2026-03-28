import { useState } from "react";
import "./components/styles/onlineshop.css";
import axios from "axios";


function AdminPage() {
    const [games, setGames] = useState([]);
   const [titel, setTitel] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [preis, setPreis] = useState("");

    //Flughafen Hinzufügen
    const addgame = async () => {



        try {
            await axios.post("http://localhost:8080/games/add", {
                titel,
                beschreibung,
                preis,
            });

            await fetchGames(); 
            setTitel("");
            setBeschreibung("");
            setPreis("");
            
        } catch (error) {
            console.error("Fehler beim Hinzufügen:", error.response?.data);
            alert("Fehler beim Hinzufügen Stellen Sie sicher das sie auf dem Port 5173 sind Sonst melden sie sich bitte beim Support")
        }
    };







    return (
        <div className="filme-container">
            <h1 className="titel">Produkte Hinzufügen</h1>
            <div className="film-grid">
                <h2>Neues Game Hinzufügen</h2>
               
            </div>

        </div>


    );
}
export default AdminPage;