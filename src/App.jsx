// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobeComponent from "./components/Globe";
import ContinentGallery from "./pages/ContinentGallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobeComponent />} />
      <Route path="/north-america" element={<ContinentGallery continent="north-america" />} />
      <Route path="/south-america" element={<ContinentGallery continent="south-america" />} />
      <Route path="/europe" element={<ContinentGallery continent="europe" />} />
      <Route path="/africa" element={<ContinentGallery continent="africa" />} />
      <Route path="/asia" element={<ContinentGallery continent="asia" />} />
      <Route path="/australia" element={<ContinentGallery continent="australia" />} />
      <Route path="/antarctica" element={<ContinentGallery continent="antarctica" />} />
    </Routes>
  );
}

export default App;
