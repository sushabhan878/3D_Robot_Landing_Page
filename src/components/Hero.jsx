import React from "react";
import boxicons from "boxicons";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen overflow-hidden">
      {/* Left Text Content */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="relative z-10 max-w-xl w-full px-6 sm:px-12 pt-12 lg:pt-0"
      >
        {/* Tag Box */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mb-6">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white text-sm font-medium">
            <box-icon name="diamond" color="#fffefe"></box-icon>
            INTRODUCING
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR <br />
          DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-md mb-8">
          The best way to reach humans instead of spam folders, delivers
          transactional and marketing emails at scale.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Spline Container */}
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full"
      >
        <Spline scene="https://prod.spline.design/mTDQgebSH6Lt9sTr/scene.splinecode" />
      </div>
    </main>
  );
};

export default Hero;
