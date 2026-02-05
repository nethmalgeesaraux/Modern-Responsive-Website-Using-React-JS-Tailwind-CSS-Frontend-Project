import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";


function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
    </div>
  );
}

export default App;
