import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const styleNav = {
    color: "white",
  };

  return (
    <nav>
      <h1>My Weather Application</h1>
      <ul className="nav-links">
        <Link to="/" style={styleNav}>
          <li>Home</li>
        </Link>
        <Link to="/cities" style={styleNav}>
          <li>Cities</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
