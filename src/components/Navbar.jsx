import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Image Gallery", url: "/gallery" },
    { label: "Destinations", url: "/europe" },
    { label: "Team", url: "/team" },
    { label: "Feedback", url: "/contact" },
    { label: "                                                                          .....         ", url: "/asia" },
  ];

  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        color: "white",
        zIndex: 10000,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backdropFilter: "blur(10px)",
        background: "rgba(0, 0, 0, 0.1)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
      }}
    >
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
        style={{
          fontSize: "1.8rem",
          cursor: "pointer",
          display: "none", // Set to "block" if using hamburger on small screens
          color: "white",
          marginLeft: "1rem",
        }}
      >
        ☰
      </div>

      <div
        onClick={() => handleNavigation("/")}
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#ffffff",
          textShadow: "0 0 4px #00bfff",
        }}
      >
        Tourism Explorer
      </div>

      {(menuOpen || window.innerWidth > 768) && (
        <div
          className="nav-links"
          style={{
            display: "flex",
            flexDirection: window.innerWidth <= 768 ? "column" : "row",
            position: window.innerWidth <= 768 ? "fixed" : "static",
            top: "56px",
            right: window.innerWidth <= 768 ? "0" : undefined,
            background: window.innerWidth <= 768 ? "rgba(0,0,0,0.9)" : "transparent",
            width: window.innerWidth <= 768 ? "220px" : "auto",
            padding: window.innerWidth <= 768 ? "1rem" : "0",
            borderRadius: window.innerWidth <= 768 ? "0 0 0 8px" : "0",
            boxShadow: window.innerWidth <= 768 ? "0 4px 12px rgba(0,0,0,0.7)" : "none",
            zIndex: 9999,
            gap: "1.5rem",
            fontWeight: "600",
            marginLeft: window.innerWidth > 768 ? "auto" : undefined,
          }}
        >
          {navLinks.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(url);
              }}
              style={{
                color: "white",
                textDecoration: "none",
                padding: "0.75rem 0",
                fontSize: window.innerWidth <= 768 ? "1.1rem" : "inherit",
                transition: "transform 0.2s ease, text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.textShadow = "0 0 8px #00bfff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
