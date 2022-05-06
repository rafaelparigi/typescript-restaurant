import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-div">
        <h1 style={{ display: "none" }}>Restaurants</h1>
      </div>
      <nav className="topnav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/add-form">
          Add New Restaurant/Menu/MenuItem
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </nav>
    </div>
  );
};
