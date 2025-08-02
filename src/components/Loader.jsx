// import React from "react";
// import "./Loader.css"; // Style this file as you wish

// export default function Loader() {
//   return (
//     <div className="loader-screen">
//       <h1>Loading...</h1>
//     </div>
//   );
// }
// src/components/Loader.jsx
// import React, { useEffect, useState } from "react";
// import "./Loader.css";

// export default function Loader() {
//   const [count, setCount] = useState(0);
//   const [visibleLines, setVisibleLines] = useState(0);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     // Counter from 83 to 100
//     const counter = setInterval(() => {
//       setCount((prev) => {
//         if (prev < 100) return prev + 1;
//         clearInterval(counter);
//         return prev;
//       });
//     }, 500); // adjust speed as needed

//     // Show text lines one by one
//     const lineReveal = setInterval(() => {
//       setVisibleLines((prev) => {
//         if (prev < 4) return prev + 1;
//         clearInterval(lineReveal);
//         return prev;
//       });
//     }, 1000);

//     // Fade out after 10 seconds
//     const fadeTimer = setTimeout(() => {
//       setFadeOut(true);
//     }, 10000);

//     return () => {
//       clearInterval(counter);
//       clearInterval(lineReveal);
//       clearTimeout(fadeTimer);
//     };
//   }, []);

//   return (
//     <div className={`loader-screen ${fadeOut ? "fade-out" : ""}`}>
//       <div className="loader-counter">{count} - 100</div>

//       <div className="loader-text">
//         {visibleLines > 0 && <h1>YOUR</h1>}
//         {visibleLines > 1 && <h1>WEB EXPERIENCE</h1>}
//         {visibleLines > 2 && <h1>IS LOADING</h1>}
//         {visibleLines > 3 && (
//           <h1 className="blink">RIGHT NOW</h1>
//         )}
//       </div>

//       {visibleLines > 3 && (
//         <p className="loader-footer">Please wait a few seconds.</p>
//       )}
//     </div>
//   );
// }
// src/components/Loader.jsx
// import React, { useEffect, useState } from "react";
// import "./Loader.css";

// export default function Loader() {
//   const [count, setCount] = useState(83);
//   const [visibleLines, setVisibleLines] = useState(0);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     // Counter from 83 to 100 in 10 seconds
//     const steps = 100; // from 83 to 100 inclusive = 18 values
//     const intervalTime = 10000 / steps; // ~588ms
//     const counter = setInterval(() => {
//       setCount((prev) => {
//         if (prev < 100) return prev + 1;
//         clearInterval(counter);
//         return prev;
//       });
//     }, intervalTime);

//     // Show lines one after another
//     const revealIntervals = [1000, 2000, 3000, 4000];
//     revealIntervals.forEach((time, index) => {
//       setTimeout(() => setVisibleLines(index + 1), time);
//     });

//     // Fade out slightly before transition
//     const fadeTimer = setTimeout(() => {
//       setFadeOut(true);
//     }, 10000);

//     return () => {
//       clearInterval(counter);
//       clearTimeout(fadeTimer);
//     };
//   }, []);

//   return (
//     <div className={`loader-screen ${fadeOut ? "fade-out" : ""}`}>
//       <div className="loader-counter">{count} - 100</div>

//       <div className="loader-text">
//         {visibleLines >= 1 && <h1>YOUR</h1>}
//         {visibleLines >= 2 && <h1>WEB EXPERIENCE</h1>}
//         {visibleLines >= 3 && <h1>IS LOADING</h1>}
//         {visibleLines >= 4 && <h1 className="blink">RIGHT NOW</h1>}
//       </div>

//       {visibleLines >= 4 && (
//         <p className="loader-footer">Please wait a few seconds.</p>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {
  const [count, setCount] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const totalSteps = 100 - 0 + 1; // 18 steps
    const intervalTime = 5000/ totalSteps; // ≈ 555ms

    const counter = setInterval(() => {
      setCount((prev) => {
        const next = prev + 1;
        const stepIndex = next - 0;

        // Reveal line based on progress
        if (stepIndex === 4) setVisibleLines(1); // YOUR
        if (stepIndex === 7) setVisibleLines(2); // WEB EXPERIENCE
        if (stepIndex === 11) setVisibleLines(3); // IS LOADING
        if (stepIndex === 15) setVisibleLines(4); // RIGHT NOW

        if (next >= 100) {
          clearInterval(counter);
          setTimeout(() => setFadeOut(true), 300); // slight pause
          setTimeout(() => onFinish(), 2300); // wait for 2s fade
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(counter);
  }, [onFinish]);

  return (
    <div className={`loader-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-counter">{count} - 100</div>

      <div className="loader-text">
        {visibleLines >= 1 && <h1>YOUR</h1>}
        {visibleLines >= 2 && <h1>WEB EXPERIENCE</h1>}
        {visibleLines >= 3 && <h1>IS LOADING</h1>}
        {visibleLines >= 4 && <h1 className="blink">RIGHT <span className="now-blink">NOW</span></h1>}

      </div>

      {visibleLines >= 4 && (
        <p className="loader-footer">Please wait a few seconds.</p>
      )}
    </div>
  );
}
