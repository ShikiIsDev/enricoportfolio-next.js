import { global } from "styled-jsx/css"
import "./globals.css";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <section className="h-screen bg-gray-200 flex justify-center items-center" id="Home">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to my website</h1>
          <p> Website</p>
        </div>
      </section>

      {/* Second Section */}
      <section className="h-screen bg-gray-300" id="About Us">
        {/* Content of the second section */}
      </section>

      {/* Third Section */}
      <section className="h-screen bg-gray-400" id="Portfolio">
        {/* Content of the third section */}
      </section>

      {/* Third Section */}
      <section className="h-screen bg-gray-500" id="Contact Me">
        {/* Content of the third section */}
      </section>
    </div>
  )
}