import React, { useEffect, useState } from "react";
import "./TeamPage.css";
import Navbar from "../components/Navbar";

const team = [
  { name: "Shravani S Naik", image: "/stars.jpg" },
  { name: "Rakshita", image: "/stars.jpg" },
];

const stackedText = "WEBexplorer";

export default function TeamPage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [revealedLines, setRevealedLines] = useState(0);
  const [removedLines, setRemovedLines] = useState(0);
  const [phase, setPhase] = useState("reveal");
  const [ripples, setRipples] = useState([]);

  // Reveal/remove animation for stacked text
  useEffect(() => {
    if (phase === "reveal") {
      if (currentLine < stackedText.length) {
        const timer = setTimeout(() => {
          setRevealedLines((r) => Math.max(r, currentLine + 1));
          setCurrentLine((line) => line + 1);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase("remove");
          setRemovedLines(0);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else if (phase === "remove") {
      if (removedLines < stackedText.length) {
        const timer = setTimeout(() => {
          setRemovedLines((r) => r + 1);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase("reveal");
          setCurrentLine(0);
          setRevealedLines(0);
          setRemovedLines(0);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, currentLine, removedLines]);

  // Ripple effect logic
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      setRipples((old) => [...old, { id, x, y }]);

      setTimeout(() => {
        setRipples((old) => old.filter((r) => r.id !== id));
      }, 800);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="team-page-layout">
        {/* Ripple background container */}
        <div className="ripple-background">
          {ripples.map(({ id, x, y }) => (
            <div
              key={id}
              className="ripple"
              style={{ top: `${y}%`, left: `${x}%` }}
            />
          ))}
        </div>

        {/* Left stacked text animation */}
        <div className="left-stacked-text">
          {Array.from({ length: stackedText.length }, (_, i) => {
            const isVisible = i < revealedLines && i >= removedLines;
            return (
              <div
                key={i}
                className={`stack-line ${isVisible ? "visible" : ""}`}
              >
                {isVisible ? stackedText.slice(0, i + 1) : ""}
              </div>
            );
          })}
        </div>

        {/* Right team section with fade + slide up animation */}
        <div className="right-team-section">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                className="team-bar"
                key={index}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="left-text">{member.name}</div>
                <div className="center-img">
                  <img src={member.image} alt={member.name} />
                  <div className="name-overlay">{member.name}</div>
                </div>
                <div className="right-text">Full Stack Developer</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
