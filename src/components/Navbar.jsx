import React, { useState } from "react";
import "../styles.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <h1>Tourism</h1>

      {/* Hamburger button */}
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={e => { if (e.key === 'Enter') toggleMenu(); }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuActive ? "active" : ""}>
        <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
        <li><a href="#destinations" onClick={() => setMenuActive(false)}>Destinations</a></li>
        <li><a href="#packages" onClick={() => setMenuActive(false)}>Packages</a></li>
        <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
