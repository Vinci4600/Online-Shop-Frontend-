import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔑 Basic Auth Token erstellen
    const auth = btoa(username + ":" + password);

    // speichern
    localStorage.setItem("auth", auth);

    // optional: Rolle setzen (einfach für jetzt)
    if (username === "admin") {
      localStorage.setItem("role", "ADMIN");
    } else {
      localStorage.setItem("role", "USER");
    }

    // weiterleiten
    window.location.href = "/games";
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Passwort"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;