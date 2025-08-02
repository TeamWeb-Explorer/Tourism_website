import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobeComponent from "./components/Globe";
import ContinentGallery from "./pages/ContinentGallery";
import Gallery from "./pages/Gallery";
import FeedbackContact from "./pages/FeedbackContact"; // Add this at the top


import TeamPage from "./pages/TeamPage";
import Loader from "./components/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 10000); // 10 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // 10s loader + 2s fade

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

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
      <Route path="/gallery" element={<Gallery />} /> {/* Optional route for your Indian gallery */}
      <Route path="/contact" element={<FeedbackContact />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  );
}

export default App;
