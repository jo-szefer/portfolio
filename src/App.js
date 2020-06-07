import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <link
        href="http://db.onlinewebfonts.com/c/24a69b0d49de39034663d837a985f04b?family=BenguiatITCW01-BoldCn"
        rel="stylesheet"
        type="text/css"
      />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
