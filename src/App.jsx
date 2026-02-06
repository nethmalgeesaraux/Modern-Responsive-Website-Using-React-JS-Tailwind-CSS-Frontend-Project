import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/Services";
import { OurWork } from "./components/OurWork";
import { Teams } from "./components/Teams";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="dark:bg-black relative min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Overlay layer for mouse effect */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {/* Dot */}
        <div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{
            left: pos.x - 8,
            top: pos.y - 8,
            transition: "transform 0.05s linear",
          }}
        ></div>

        {/* Ring */}
        <div
          className="absolute w-16 h-16 border border-gray-400 rounded-full"
          style={{
            left: pos.x - 32,
            top: pos.y - 32,
            transition: "transform 0.1s linear",
          }}
        ></div>

      </div>

      {/* Main sections */}
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <br />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
