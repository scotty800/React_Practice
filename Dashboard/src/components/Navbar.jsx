import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>🌙 / ☀️</button>
    </nav>
  );
}

export default Navbar;
