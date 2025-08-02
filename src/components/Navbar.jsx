import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Image Gallery", url: "/gallery" },
    { label: "Destinations", url: "/europe" },
    { label: "Team", url: "/team" },
    { label: "Feedback", url: "/contact" },
    { label: "                                                                                              ", url: "/asia" },
  ];

  const handleNavigation = (url) => {
    navigate(url);
    if (isMobile) setMenuOpen(false); // Close menu on mobile after navigation
  };

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false); // Reset on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
       // background: "rgba(0, 0, 0, 0.1)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
      }}
    >
      {/* Hamburger for mobile */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            fontSize: "1.8rem",
            cursor: "pointer",
            display: "block",
            color: "white",
            marginRight: "1rem",
          }}
        >
          ☰
        </div>
      )}

      {/* Logo */}
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

      {/* Navigation links */}
      {(menuOpen || !isMobile) && (
        <div
          className="nav-links"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            position: isMobile ? "fixed" : "static",
            top: isMobile ? "56px" : undefined,
            right: isMobile ? "0" : undefined,
            background: isMobile ? "rgba(0,0,0,0.9)" : "transparent",
            width: isMobile ? "220px" : "auto",
            padding: isMobile ? "1rem" : "0",
            borderRadius: isMobile ? "0 0 0 8px" : "0",
            boxShadow: isMobile ? "0 4px 12px rgba(0,0,0,0.7)" : "none",
            zIndex: 9999,
            gap: "1.5rem",
            fontWeight: "600",
            marginLeft: !isMobile ? "auto" : undefined,
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
                fontSize: isMobile ? "1.1rem" : "inherit",
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
