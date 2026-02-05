import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/Services";
import { OurWork } from "./components/OurWork";
import { Teams } from "./components/Teams";


function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
    </div>
  );
}

export default App;
