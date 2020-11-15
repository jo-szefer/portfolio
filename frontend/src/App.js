import React from "react";
import "./App.css";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Navigation } from "./components/Navigation";
import { WaveDivider } from "./components/common/WaveDivider";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <WaveDivider />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
