import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Food from "./Food";
import Destinations from "./Destinations";
import Weather from "./Weather";
import Entertainment from "./Entertainment";
import logo from "./assets/ExploreJapan.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav>
        <div className="logo">
          <img src={logo} alt="Explore Japan Logo" />
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

      <Routes>
        <Route path="/" element={<Destinations />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Entertainment" element={<Entertainment />} />
      </Routes>
    </Router>
  );
}

export default App;
