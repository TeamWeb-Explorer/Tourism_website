// import React, { useState } from "react";
// import "../styles.css";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <nav className="navbar">
//       <h1>Tourism</h1>

//       {/* Hamburger button */}
//       <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={e => { if (e.key === 'Enter') toggleMenu(); }}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ul className={menuActive ? "active" : ""}>
//         <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
//         <li><a href="#destinations" onClick={() => setMenuActive(false)}>Destinations</a></li>
//         <li><a href="#packages" onClick={() => setMenuActive(false)}>Packages</a></li>
//         <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Helper: Scroll to section if on homepage
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      window.location.href = `/#${id}`; // fallback if not on homepage
    }
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <h1>Tourism</h1>

      <div
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") toggleMenu();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuActive ? "active" : ""}>
        <li>
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#destinations" onClick={(e) => handleNavClick(e, "destinations")}>
            Destinations
          </a>
        </li>
        <li>
          <a href="#packages" onClick={(e) => handleNavClick(e, "packages")}>
            Packages
          </a>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMenuActive(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuActive(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
