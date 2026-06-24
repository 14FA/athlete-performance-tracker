import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px" }}>
      <Link to="/">Home</Link> {" | "}
      <Link to="/dashboard">Dashboard</Link> {" | "}
      <Link to="/add-session">Add Session</Link> {" | "}
      <Link to="/stats">Stats</Link> {" | "}
      <Link to="/goals">Goals</Link> {" | "}
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;