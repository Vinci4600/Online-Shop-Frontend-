import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Wenn nicht eingeloggt oder kein Admin → zurück zur Startseite
  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  // Wenn Admin → zeige die Seite
  return children;
};

export default AdminRoute;