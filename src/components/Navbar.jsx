import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Image Gallery", url: "/gallery" },
    { label: "Destinations", url: "/europe" },
    { label: "Team", url: "/team" },
    { label: "Feedback", url: "/contact" },
     { label: "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ", url: "/contact" },
  ];

  const handleNavigation = (url) => {
    navigate(url);
    if (isMobile) setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
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
        paddingRight: "20000rem", 
        display: "flex",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        color: "white",
        zIndex: 10000,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
      }}
    >
      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
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

      {(menuOpen || !isMobile) && (
        <div
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
          {navLinks.map(({ label, url }) => {
            const isActive = location.pathname === url;

            return (
              <a
                key={label}
                href={url}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(url);
                }}
                style={{
                  color: isActive ? "#00ffff" : "white",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  fontSize: isMobile ? "1.1rem" : "inherit",
                  fontWeight: isActive ? "700" : "600",
                  transform: isActive ? "scale(1.1)" : "scale(1)",
                  textShadow: isActive
                    ? "0 0 8px #00ffff, 0 0 12px #00ffff"
                    : "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.textShadow =
                    "0 0 8px #00bfff, 0 0 12px #00bfff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = isActive
                    ? "scale(1.1)"
                    : "scale(1)";
                  e.currentTarget.style.textShadow = isActive
                    ? "0 0 8px #00ffff, 0 0 12px #00ffff"
                    : "none";
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
