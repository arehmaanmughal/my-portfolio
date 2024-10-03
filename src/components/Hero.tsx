import React from "react";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen w-full flex items-center">
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 text-white space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-center">
              Hello, I'm <span className="text-blue-500">Abdul Rehman</span>
            </h1>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center">
              A Passionate{" "}
              <span className="text-blue-500">Frontend Developer</span>
            </h2>
            <p className="w-full max-w-2xl mx-auto text-lg sm:text-xl text-center">
              Crafting interactive and user-friendly web experiences with a
              focus on modern design and clean code.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-500 text-white rounded-full px-6 py-3 text-xl sm:px-8 sm:py-4 sm:text-2xl font-medium hover:bg-white hover:text-black flex justify-center items-center gap-3">
              Download Resume
              <span className="text-2xl sm:text-4xl">
                <IoMdDownload />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
