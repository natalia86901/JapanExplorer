import React, { useState } from "react";
import "../App.css";
import "./Menu.css"
import logo from "../assets/ExploreJapan.png";
import { Link } from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} width="45px" alt="Explore Japan Logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="link" onClick={() => setMenuOpen(false)}>
            Destinations
          </Link>
          <Link
            to="/Weather"
            className="link"
            onClick={() => setMenuOpen(false)}
          >
            Weather
          </Link>
          <Link to="/Food" className="link" onClick={() => setMenuOpen(false)}>
            Food
          </Link>
          <Link
            to="/Entertainment"
            className="link"
            onClick={() => setMenuOpen(false)}
          >
            Entertainment
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
