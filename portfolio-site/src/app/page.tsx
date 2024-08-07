"use client"

import "./globals.css";
import Intro from "./intro";
import About from "./about";
import Portfolio from "./Portfolio";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <section className="relative w-screen h-screen bg-gray-200 flex items-center justify-center" id="Home">
      <Intro />
      </section>

      {/* Second Section */}
      <section className="relative w-screen h-screen bg-gray-300 flex items-center justify-center" id="About Us">
        <About />
      </section>

      {/* Third Section */}
      <section className="h-screen bg-gray-400" id="Portfolio">
       <Portfolio />
      </section>

      {/* Fourth Section */}
      <section className="h-screen bg-gray-500" id="Contact Me">
        <br></br>
        <br></br>
        <br></br>
        <Contact />
        <br></br>
      </section>
    </div>
  );
}
