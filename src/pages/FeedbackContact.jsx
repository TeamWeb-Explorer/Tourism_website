// import React, { useState } from "react";
// import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
// import "./feedback.css";

// const Feedback = () => {
//   const [rating, setRating] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [feedbackText, setFeedbackText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setRating(null);
//       setFeedbackText("");
//       setSubmitted(false);
//     }, 4000);
//   };

//   const emojis = [
//     { icon: <FaSmile size={40} color="#4CAF50" />, value: "good" },
//     { icon: <FaMeh size={40} color="#FF9800" />, value: "average" },
//     { icon: <FaFrown size={40} color="#F44336" />, value: "bad" },
//   ];

//  return (
//   <div className="page-wrapper">
//     <div className="feedback-container">
//       {!submitted ? (
//         <form className="feedback-form fade-in" onSubmit={handleSubmit}>
//           <h2>We'd love your Feedback!</h2>
//           <p>How was your experience?</p>
//           <div className="emoji-rating">
//             {emojis.map((emoji) => (
//               <div
//                 key={emoji.value}
//                 className={`emoji ${rating === emoji.value ? "selected" : ""}`}
//                 onClick={() => setRating(emoji.value)}
//               >
//                 {emoji.icon}
//               </div>
//             ))}
//           </div>

//           <textarea
//             placeholder="Tell us more..."
//             value={feedbackText}
//             onChange={(e) => setFeedbackText(e.target.value)}
//             required
//           />

//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       ) : (
//         <div className="thankyou-message pop-up">
//           <h2>🎉 Thank You!</h2>
//           <p>Your feedback has been received.</p>
//           <div className="confetti">🎊🎉✨🌟💫</div>
//         </div>
//       )}
//     </div>
//   </div>
// );

// };

// export default Feedback;
import React, { useState, useEffect } from "react";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import "./feedback.css";
import Navbar from "../components/Navbar";

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  //const [ripples, setRipples] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setRating(null);
      setFeedbackText("");
      setSubmitted(false);
    }, 4000);
  };

  const emojis = [
    { icon: <FaSmile size={40} color="#4CAF50" />, value: "good" },
    { icon: <FaMeh size={40} color="#FF9800" />, value: "average" },
    { icon: <FaFrown size={40} color="#F44336" />, value: "bad" },
  ];

//   const createRipple = (e) => {
//     const rippleContainer = document.getElementById("ripple-background");
//     const newRipple = document.createElement("span");

//     const size = 150;
//     const x = e.clientX - size / 2;
//     const y = e.clientY - size / 2;

//     newRipple.className = "ripple";
//     newRipple.style.left = `${x}px`;
//     newRipple.style.top = `${y}px`;

//     rippleContainer.appendChild(newRipple);

//     setTimeout(() => {
//       newRipple.remove();
//     }, 800);
//   };
const createRipple = (x = null, y = null) => {
  const rippleContainer = document.getElementById("ripple-background");
  if (!rippleContainer) return;

  const newRipple = document.createElement("span");
  const size = 150;

  const posX = x ?? Math.random() * window.innerWidth;
  const posY = y ?? Math.random() * window.innerHeight;

  newRipple.className = "ripple";
  newRipple.style.left = `${posX - size / 2}px`;
  newRipple.style.top = `${posY - size / 2}px`;

  rippleContainer.appendChild(newRipple);

  setTimeout(() => {
    newRipple.remove();
  }, 2000);
};

//   useEffect(() => {
//     document.addEventListener("click", createRipple);
//     return () => {
//       document.removeEventListener("click", createRipple);
//     };
//   }, []);
useEffect(() => {
  const interval = setInterval(() => {
    createRipple(); // Random position
  }, 300); // previously 600ms

  return () => clearInterval(interval);
}, []);



  return (
  <div className="page-wrapper">
    <Navbar />  {/* <-- Add Navbar here */}

    {/* Ripple effect background */}
    <div className="ripple-background" id="ripple-background"></div>

    <div className="feedback-container">
      {!submitted ? (
        <form className="feedback-form fade-in" onSubmit={handleSubmit}>
          <h2>We'd love your Feedback!</h2>
          <p>How was your experience?</p>
          <div className="emoji-rating">
            {emojis.map((emoji) => (
              <div
                key={emoji.value}
                className={`emoji ${rating === emoji.value ? "selected" : ""}`}
                onClick={() => setRating(emoji.value)}
              >
                {emoji.icon}
              </div>
            ))}
          </div>

          <textarea
            placeholder="Tell us more..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <div className="thankyou-message pop-up">
          <h2>🎉 Thank You!</h2>
          <p>Your feedback has been received.</p>
          <div className="confetti">🎊🎉✨🌟💫</div>
        </div>
      )}
    </div>
  </div>
);
}

export default Feedback;
