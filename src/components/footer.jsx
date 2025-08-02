import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-x-twitter"></i>
        <i className="fab fa-pinterest-p"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-tiktok"></i>
      </div>

      <div className="trustpilot">
        <span className="stars">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="half-star">&#9733;</span>
        </span>
        <span className="rating-text">4.4 rating | 273,399 reviews</span>
        <span className="trustpilot-text">Trustpilot</span>
      </div>

     
    </footer>
  );
}
