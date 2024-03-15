import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Education,
  Skills,
} from "./components";
import MouseBounce from "./utils/MouseBounce";

function App() {
  return (
    <BrowserRouter>
      <MouseBounce />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* background image */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        {/* <Feedbacks /> */}
        <Skills />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// https://codepen.io/gusevdigital/pen/MWxyXRa - for mouse effect
