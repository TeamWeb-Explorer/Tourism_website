import React, { useEffect } from "react";
import Navbar from "../components/Navbar";  // <-- Import Navbar
import "./ImageGallery.css";

const descriptions = {
  "north-america": [
    ["Grand Canyon", "A natural wonder carved by the Colorado River."],
    ["New York", "The city that never sleeps."],
    ["Niagara Falls", "Thundering falls on the US-Canada border."],
    ["Yellowstone", "Home to geysers and hot springs."],
    ["Alaska", "Snow-covered beauty and wilderness."],
    ["Las Vegas", "The entertainment capital of the world."],
    ["Hollywood", "The global hub for movie making."],
    ["Chicago", "Known for architecture and jazz."],
    ["Florida Keys", "A tropical getaway of islands."],
    ["Seattle", "Coffee, tech, and rainy vibes."],
  ],
  // ... other continents ...
};

export default function ContinentGallery({ continent }) {
  const places = descriptions[continent] ?? [];

  useEffect(() => {
    const container = document.querySelector(".continent-gallery");
    let lastRippleTime = 0;

    const createRipple = (e) => {
      const now = Date.now();
      if (now - lastRippleTime < 300) return; // throttle
      lastRippleTime = now;

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = container.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;

      container.querySelector(".ripple-background").appendChild(ripple);

      setTimeout(() => ripple.remove(), 800);
    };

    container.addEventListener("mousemove", createRipple);
    return () => container.removeEventListener("mousemove", createRipple);
  }, []);

 return (
  <div className="continent-gallery">
    <Navbar />  {/* <-- Navbar included here */}

    <div className="ripple-background"></div>

    <h2
      className="continent-title"
      style={{
        fontWeight: "bold",
        fontSize: "3.5rem",
        cursor: "default",
        color: "#ffffff",
        textShadow: "0 0 5px #00bfff",
        textAlign: "center",
        marginBottom: "1rem",
      }}
    >
      {continent.replace("-", " ").toUpperCase()}
    </h2>

    <div className="marquee">
      <div className="marquee-content">
        {Array.from({ length: 10 }).map((_, i) => {
          const [title, desc] =
            places[i] || [`Image ${i + 1}`, "Description coming soon"];
          return (
            <div className="image-box" key={i}>
              <img
                src={`/assets/images/${continent}/${continent}${i + 1}.jpg`}
                alt={title}
                className="continent-image"
              />
              <div className="overlay">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Plane animation at bottom */}
    <div className="plane-container">
      <img
        src="/globe_plane.png"
        alt="Flying Plane"
        className="flying-plane"
      />
    </div>
  </div>
);

}
