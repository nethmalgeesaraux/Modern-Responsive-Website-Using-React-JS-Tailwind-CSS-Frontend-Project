import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/Services";
import { OurWork } from "./components/OurWork";
import { Teams } from "./components/Teams";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection"; // new wrapper

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
        <div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{
            left: pos.x - 8,
            top: pos.y - 8,
            transition: "transform 0.05s linear",
          }}
        ></div>
        <div
          className="absolute w-16 h-16 border border-gray-400 rounded-full"
          style={{
            left: pos.x - 32,
            top: pos.y - 32,
            transition: "transform 0.1s linear",
          }}
        ></div>
      </div>

      {/* Scroll-triggered animations */}
      <AnimatedSection animationClass="animate-fadeInDown">
        <Navbar theme={theme} setTheme={setTheme} />
      </AnimatedSection>

      <AnimatedSection animationClass="animate-fadeInUp">
        <Hero />
      </AnimatedSection>

      <AnimatedSection animationClass="animate-fadeInLeft">
        <TrustedBy />
      </AnimatedSection>

      <AnimatedSection animationClass="animate-zoomIn">
        <Services />
      </AnimatedSection>

      <AnimatedSection animationClass="animate-fadeInUp">
        <OurWork />
      </AnimatedSection>

      <AnimatedSection animationClass="animate-fadeInRight">
        <Teams />
      </AnimatedSection>

      <AnimatedSection animationClass="animate-fadeIn">
        <ContactUs />
      </AnimatedSection>

      <br />

      <AnimatedSection animationClass="animate-fadeIn">
        <Footer theme={theme} />
      </AnimatedSection>
    </div>
  );
}

export default App;
