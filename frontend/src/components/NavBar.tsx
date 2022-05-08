import "../styles/NavBar.css";
import "react-toggle/style.css";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import { FunctionComponent, useContext, useEffect } from "react";
import { AdminContext } from "../contexts/AdminContext";
import { ThemeContext } from "../contexts/ThemeContext";
import sun from "../images/sun.png";
import moon from "../images/moon.png";

export const NavBar: FunctionComponent = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="navbar-div">
        <h1 style={{ display: "none" }}>Restaurants</h1>
      </div>
      <nav className="topnav">
        <img
          src={theme === "light" ? moon : sun}
          className="theme-icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <label className="admin-toggle">
          <Toggle onChange={() => setIsAdmin(!isAdmin)} />
        </label>
        <Link className="link" to="/">
          Home
        </Link>
        {isAdmin && (
          <Link className="link" to="/add-form">
            Add New Restaurant/Menu/MenuItem
          </Link>
        )}
      </nav>
    </div>
  );
};
