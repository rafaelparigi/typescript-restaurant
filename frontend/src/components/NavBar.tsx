import "../styles/NavBar.css";
import "react-toggle/style.css";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import { FunctionComponent, useContext, useEffect } from "react";
import { AdminContext } from "../contexts/AdminContext";

export const NavBar: FunctionComponent = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  return (
    <div className="navbar">
      <div className="navbar-div">
        <h1 style={{ display: "none" }}>Restaurants</h1>
      </div>
      <nav className="topnav">
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
