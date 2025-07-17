import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Food from "./Food/Food";
import Destinations from "./Destinations/Destinations";
import Weather from "./Weather/Weather";
import Entertainment from "./Entertainment/Entertainment";
import Menu from "./Menu/Menu";

function App() {
  return (
    <Router>
      <Menu />
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
