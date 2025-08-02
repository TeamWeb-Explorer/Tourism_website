import React, { useRef, useEffect, useState, Suspense } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

export default function GlobeComponent() {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationData, setAnimationData] = useState(null); // { url }
const handleGlobeClick = () => {
  if (globeEl.current) {
    globeEl.current.controls().autoRotate = false;
  }
};
  const continents = [
    { name: "North America", lat: 54.526, lng: -105.255, url: "/north-america" },
    { name: "South America", lat: -8.7832, lng: -55.4915, url: "/south-america" },
    { name: "Europe", lat: 54.526, lng: 15.255, url: "/europe" },
    { name: "Africa", lat: 8.7832, lng: 34.5085, url: "/africa" },
    { name: "Asia", lat: 34.0479, lng: 100.6197, url: "/asia" },
    { name: "Australia", lat: -25.2744, lng: 133.7751, url: "/australia" },
    { name: "Antarctica", lat: -82.8628, lng: 135.0, url: "/antarctica" },
  ];

 useEffect(() => {
  if (globeEl.current) {
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    let resumeTimeout = null;

    const handleUserInteraction = () => {
      controls.autoRotate = false;

      // Clear existing timeout if user interacts repeatedly
      if (resumeTimeout) clearTimeout(resumeTimeout);

      // Resume rotation after 0.5s
      resumeTimeout = setTimeout(() => {
        controls.autoRotate = true;
      }, 1000);
    };

    controls.addEventListener('start', handleUserInteraction);

    return () => {
      controls.removeEventListener('start', handleUserInteraction);
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };
  }
}, []);


  const handleContinentClick = (url) => {
    setAnimationData({ url });
  };

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Image Gallery", url: "/gallery" },
    { label: "Destinations", url: "/europe" },
    { label: "Team", url: "/asia" },
    { label: "Feedback", url: "/contact" },
    { label: "                                                                          .....         ", url: "/asia" },
  ];

  return (
    <>
    <style>
{`
@keyframes flyAround {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(0px);
  }
  25% {
    transform: translate(-50%, -50%) rotate(15deg) translateX(150px) translateY(-40px);
  }
  50% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(0px);
  }
  75% {
    transform: translate(-50%, -50%) rotate(-15deg) translateX(-150px) translateY(40px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(0px);
  }
}
`}
</style>

      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
        src="/home_tourism_background.mp4"
      />

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
          background: "rgba(0, 0, 0, 0.1)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
        }}
      >
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            fontSize: "1.8rem",
            cursor: "pointer",
            display: "none",
            color: "white",
            marginLeft: "1rem",
          }}
        >
          ☰
        </div>

        <div
          onClick={() => handleContinentClick("/")}
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

        {(menuOpen || window.innerWidth > 768) && (
          <div
            className="nav-links"
            style={{
              display: "flex",
              flexDirection: window.innerWidth <= 768 ? "column" : "row",
              position: window.innerWidth <= 768 ? "fixed" : "static",
              top: "56px",
              right: window.innerWidth <= 768 ? "0" : undefined,
              background: window.innerWidth <= 768 ? "rgba(0,0,0,0.9)" : "transparent",
              width: window.innerWidth <= 768 ? "220px" : "auto",
              padding: window.innerWidth <= 768 ? "1rem" : "0",
              borderRadius: window.innerWidth <= 768 ? "0 0 0 8px" : "0",
              boxShadow: window.innerWidth <= 768 ? "0 4px 12px rgba(0,0,0,0.7)" : "none",
              zIndex: 9999,
              gap: "1.5rem",
              fontWeight: "600",
              marginLeft: window.innerWidth > 768 ? "auto" : undefined,
            }}
          >
            {navLinks.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                onClick={(e) => {
                  e.preventDefault();
                  handleContinentClick(url);
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  fontSize: window.innerWidth <= 768 ? "1.1rem" : "inherit",
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

      <header
        style={{
          position: "fixed",
          top: "80px",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          color: "white",
          zIndex: 10,
          fontFamily: "'Raleway', sans-serif",
          fontStyle: "italic",
          userSelect: "none",
          padding: "0 1.5rem",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          left: 0,
          right: 0,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: "700" }}>
          Welcome to Your Next{" "}
          <span
            style={{
              color: "#00bfff",
              textShadow: "0 0 2px #00bfff, 0 0 5px #00bfff",
            }}
          >
            Adventure!
          </span>
        </h1>
        <p
          style={{
            marginTop: "0.6rem",
            fontSize: "1.25rem",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts,
          it even breaks your heart. But that’s okay. The journey changes you; it should
          change you."
        </p>
      </header>

      <div
        style={{
          position: "relative",
          top: "100px",
          width: "100vw",
          height: "calc(100vh - 140px)",
          zIndex: 1,
        }}
      >
 <Globe
  ref={globeEl}
  globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
  bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
  backgroundColor="rgba(0,0,0,0)"
  pointsData={continents}
  pointLat={(d) => d.lat}
  pointLng={(d) => d.lng}
  pointAltitude={0.01}
  pointColor={() => "#FFD700"}
  pointRadius={0.5}
  onPointClick={(point) => handleContinentClick(point.url)}
  onClick={handleGlobeClick}
  showAtmosphere={true}
  atmosphereColor="blue"
  atmosphereAltitude={0.2}
  labelsData={continents}
  labelLat={(d) => d.lat}
  labelLng={(d) => d.lng}
  labelText={(d) => d.name}
  labelSize={3}
  labelDotRadius={0.5}
  labelColor={() => 'white'}
  labelResolution={2}
/>

      </div>

      {/* Canvas Plane Animation Overlay */}
      {animationData && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          <Canvas>
            <Suspense fallback={<Html>Loading plane...</Html>}>
              <AnimatedPlane
                imageUrl="/plane.png"
                onComplete={() => {
                  setTimeout(() => {
                    document.body.style.overflow = "auto";
                    navigate(animationData.url);
                    setAnimationData(null);
                  }, 300);
                }}
              />
            </Suspense>
          </Canvas>
        </div>
      )}
   
    </>
  );
}

// 🚀 Plane animation using plane.jpg
function AnimatedPlane({ imageUrl, onComplete }) {
  const planeRef = useRef();
  const texture = useTexture(imageUrl);
  const t = useRef(0);
  const [visible, setVisible] = useState(true);

  useFrame(() => {
    if (!visible) return;

    t.current += 0.01; // Slower speed
    const angle = t.current * Math.PI * 2;
    const radius = 10;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle * 2) * 2;
    const z = Math.sin(angle) * radius;

    if (planeRef.current) {
      planeRef.current.position.set(x, y, z);
      planeRef.current.lookAt(0, 0, 0);
    }

    // When full loop is done (t=1), trigger smooth fade-out
    if (t.current >= 1 && visible) {
      setVisible(false);
      setTimeout(onComplete, 1000); // Wait 1s before callback
    }
  });

  if (!visible) return null;

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[12, 6]} />
      <meshBasicMaterial map={texture} transparent opacity={1} />
    </mesh>
  );
}
