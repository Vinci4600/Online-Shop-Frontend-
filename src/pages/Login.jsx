import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const auth = btoa(username + ":" + password);

   if (!username || !password) {
    alert("Bitte sowohl Benutzername als auch Passwort eingeben");
    return; // Abbruch, wenn eines der Felder leer ist
  }

  const user = {
    username: username,
    role: username === "admin" ? "ADMIN" : "USER",
    token: auth
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "http://localhost:5173/adminpage";
};

  return (
    <div className="homepage">
      <h2>Login</h2>
      <div className="loginBox">

      <form onSubmit={handleLogin}>
        <input
        className="inputstyle"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        <br></br>

        <input
        className="inputstyle"
          type="password"
          placeholder="Passwort"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>

        <button className="loginbutton" type="submit">Login</button>
      </form>
      <p>Noch kein Login hier klicken bitte </p>
      </div>
    </div>
  );
}

export default Login;