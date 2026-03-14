import "./components/styles/onlineshop.css";

function Home() {
  return (
    <div className="homepage">
      <h1>Herzlich Willkommen</h1>

      <hr className="divider" />

      <h2>Unsere Angebote</h2>

      <div className="Angebote">
        <div className="card">
          <h3>Gaming Zubehör</h3>
          <button className="shopbutton">Zu den Artikeln</button>
        </div>

        <div className="card">
          <h3>Filme</h3>
          <button className="shopbutton">Zu den Artikeln</button>
        </div>

        <div className="card">
          <h3>Item 3</h3>
          <button className="shopbutton">Zu den Artikeln</button>
        </div>
      </div>
    </div>
  );
}

export default Home;