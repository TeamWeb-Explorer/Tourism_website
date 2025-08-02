// src/pages/ContinentGallery.jsx
import React from "react";
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
  "south-america": [
    ["Machu Picchu", "The lost city of the Incas."],
    ["Rio", "Carnival and the Christ the Redeemer."],
    ["Amazon", "Lungs of the Earth."],
    ["Iguazu Falls", "Massive falls across 3 countries."],
    ["Salar de Uyuni", "World's largest salt flat."],
    ["Bogotá", "High-altitude capital of Colombia."],
    ["Buenos Aires", "Tango and vibrant streets."],
    ["Angel Falls", "Tallest waterfall on Earth."],
    ["Galápagos", "Unique wildlife and scenery."],
    ["Patagonia", "Glaciers and remote beauty."],
  ],
  // Dummy reused for other continents
  "europe": [["Machu Picchu", "The lost city of the Incas."],
    ["Rio", "Carnival and the Christ the Redeemer."],
    ["Amazon", "Lungs of the Earth."],
    ["Iguazu Falls", "Massive falls across 3 countries."],
    ["Salar de Uyuni", "World's largest salt flat."],
    ["Bogotá", "High-altitude capital of Colombia."],
    ["Buenos Aires", "Tango and vibrant streets."],
    ["Angel Falls", "Tallest waterfall on Earth."],
    ["Galápagos", "Unique wildlife and scenery."],
    ["Patagonia", "Glaciers and remote beauty."],],
  "africa": [["Machu Picchu", "The lost city of the Incas."],
    ["Rio", "Carnival and the Christ the Redeemer."],
    ["Amazon", "Lungs of the Earth."],
    ["Iguazu Falls", "Massive falls across 3 countries."],
    ["Salar de Uyuni", "World's largest salt flat."],
    ["Bogotá", "High-altitude capital of Colombia."],
    ["Buenos Aires", "Tango and vibrant streets."],
    ["Angel Falls", "Tallest waterfall on Earth."],
    ["Galápagos", "Unique wildlife and scenery."],
    ["Patagonia", "Glaciers and remote beauty."],],
  "asia": [["Machu Picchu", "The lost city of the Incas."],
    ["Rio", "Carnival and the Christ the Redeemer."],
    ["Amazon", "Lungs of the Earth."],
    ["Iguazu Falls", "Massive falls across 3 countries."],
    ["Salar de Uyuni", "World's largest salt flat."],
    ["Bogotá", "High-altitude capital of Colombia."],
    ["Buenos Aires", "Tango and vibrant streets."],
    ["Angel Falls", "Tallest waterfall on Earth."],
    ["Galápagos", "Unique wildlife and scenery."],
    ["Patagonia", "Glaciers and remote beauty."],],
  "australia": [["Machu Picchu", "The lost city of the Incas."],
    ["Rio", "Carnival and the Christ the Redeemer."],
    ["Amazon", "Lungs of the Earth."],
    ["Iguazu Falls", "Massive falls across 3 countries."],
    ["Salar de Uyuni", "World's largest salt flat."],
    ["Bogotá", "High-altitude capital of Colombia."],
    ["Buenos Aires", "Tango and vibrant streets."],
    ["Angel Falls", "Tallest waterfall on Earth."],
    ["Galápagos", "Unique wildlife and scenery."],
    ["Patagonia", "Glaciers and remote beauty."],],
  "antarctica": [["Machu Picchu", "The lost city of the Incas."],
    ["Rio", "Carnival and the Christ the Redeemer."],
    ["Amazon", "Lungs of the Earth."],
    ["Iguazu Falls", "Massive falls across 3 countries."],
    ["Salar de Uyuni", "World's largest salt flat."],
    ["Bogotá", "High-altitude capital of Colombia."],
    ["Buenos Aires", "Tango and vibrant streets."],
    ["Angel Falls", "Tallest waterfall on Earth."],
    ["Galápagos", "Unique wildlife and scenery."],
    ["Patagonia", "Glaciers and remote beauty."],],
};

export default function ContinentGallery({ continent }) {
  const places = descriptions[continent] ?? [];

  return (
    <div className="continent-gallery">
      <h2 className="continent-title">{continent.replace("-", " ").toUpperCase()}</h2>
      <div className="marquee">
        <div className="marquee-content">
          {Array.from({ length: 10 }).map((_, i) => {
            const [title, desc] = places[i] || [`Image ${i + 1}`, "Description coming soon"];
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
    </div>
  );
}
