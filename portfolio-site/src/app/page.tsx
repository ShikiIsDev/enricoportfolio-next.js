import "./globals.css";
import Image from "next/image";

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
        <div className="block sm:hidden h-full w-full">
          <Image
            src="/Portfolio.png"
            alt="resume"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="h-screen bg-gray-400" id="Portfolio">
        {/* Content of the third section */}
      </section>

      {/* Fourth Section */}
      <section className="h-screen bg-gray-500" id="Contact Me">
        {/* Content of the fourth section */}
      </section>
    </div>
  );
}
