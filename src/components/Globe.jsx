import React, { useRef, useEffect, useState, Suspense } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import Navbar from "../components/Navbar";


export default function GlobeComponent() {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [animationData, setAnimationData] = useState(null);

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
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          controls.autoRotate = true;
        }, 1000);
      };

      controls.addEventListener("start", handleUserInteraction);

      return () => {
        controls.removeEventListener("start", handleUserInteraction);
        if (resumeTimeout) clearTimeout(resumeTimeout);
      };
    }
  }, []);

  const handleContinentClick = (url) => {
    setAnimationData({ url });
  };

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

      <Navbar />

      {/* <header
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
          Welcome to Your Next {" "}
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
      </header> */}
      <header
  style={{
    position: "fixed",
    top: "80px",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    color: "white",
    zIndex: 10,
    fontFamily: "'Raleway', sans-serif",
    fontStyle: "italic",
    userSelect: "none",
    padding: "0 1rem",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
    left: 0,
    right: 0,
  }}
>
  <h1
    style={{
      margin: 0,
      fontSize: "clamp(1.5rem, 5vw, 3rem)",
      fontWeight: "700",
      lineHeight: 1.2,
    }}
  >
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
      fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
      fontStyle: "italic",
      lineHeight: 1.5,
      maxWidth: "90%",
      marginLeft: "auto",
      marginRight: "auto",
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
          labelColor={() => "white"}
          labelResolution={2}
        />
      </div>

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

function AnimatedPlane({ imageUrl, onComplete }) {
  const planeRef = useRef();
  const texture = useTexture(imageUrl);
  const t = useRef(0);
  const [visible, setVisible] = useState(true);

  useFrame(() => {
    if (!visible) return;

    t.current += 0.01;
    const angle = t.current * Math.PI * 2;
    const radius = 10;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle * 2) * 2;
    const z = Math.sin(angle) * radius;

    if (planeRef.current) {
      planeRef.current.position.set(x, y, z);
      planeRef.current.lookAt(0, 0, 0);
    }

    if (t.current >= 1 && visible) {
      setVisible(false);
      setTimeout(onComplete, 1000);
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