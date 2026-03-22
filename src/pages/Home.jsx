import "./components/styles/onlineshop.css";


function Home() {
  return (
    
    <div className="homepage">
      <h1>Herzlich Willkommen</h1>

      <hr className="divider" />

      <h2>Unsere Angebote</h2>

      <div className="Angebote">
        <div className="Gcard gaming">
          
          <p className="invisible">eee</p>
          <p className="invisible">eee</p>
          <p className="invisible">eee</p>
          <a href="http://localhost:5173/gamingzubeh%C3%B6r" className="shopbutton">Zum Gaming Zubehör</a>
        </div>

        <div className="Gcard filme">
          <h2 style={{ color: "#FF6F00" }}>Filme</h2>
          <p className="invisible">eee</p>
          <p className="invisible">eee</p>
          <p className="invisible">eee</p>



          <a href="http://localhost:5173/filme" className="shopbutton">Zu den Filmen</a>
        </div>

        <div className="Gcard games">
          <h3>Games</h3>
          <a href="http://localhost:5173/games" className="shopbutton">Zu den Games</a>
        </div>
      </div>
    </div>
  );
}

export default Home;