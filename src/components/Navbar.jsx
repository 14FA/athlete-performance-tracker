import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1E3A8A",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Home
      </Link>

      <Link
        to="/dashboard"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Dashboard
      </Link>

      <Link
        to="/add-session"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Add Session
      </Link>

      <Link
        to="/stats"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Stats
      </Link>

      <Link
        to="/goals"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Goals
      </Link>

      <Link
        to="/profile"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;