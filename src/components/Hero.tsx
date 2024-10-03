import React from "react";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen w-full flex items-center">
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 text-white space-y-12">
          <div className="space-y-3">
          <h1 className="text-6xl sm:text-8xl font-bold text-center">
            I am  <span className="text-blue-500">Abdul </span>Rehman
          </h1>
          <h3 className="text-4xl sm:text-6xl font-bold text-center">
            <span className="text-blue-500">Frontend</span> Developer
          </h3>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white rounded-full px-6 py-3 text-xl sm:px-8 sm:py-4 sm:text-2xl font-medium hover:bg-white hover:text-black flex justify-center items-center gap-3">
            Download Resume<span className="text-2xl sm:text-4xl"><IoMdDownload/></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
