"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Disable body scroll when the drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  return (
    <header className="text-white">
      <nav
        className={`w-full fixed top-0 h-20 flex items-center z-10 shadow-gray-800 ${
          scrollPosition > 100 ? "bg-black shadow-lg" : ""
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            My <span className="text-blue-500">Portfolio</span>
          </Link>

          {/* Links for desktop view */}
          <div className="hidden md:flex items-center space-x-4 text-lg font-medium">
            <Link
              className="bg-blue-500 rounded-md px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-out"
              href="/"
            >
              Home
            </Link>
            <Link
              className="bg-blue-500 rounded-md px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-out"
              href=""
            >
              About
            </Link>
            <Link
              className="bg-blue-500 rounded-md px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-out"
              href=""
            >
              Projects
            </Link>
            <Link
              className="bg-blue-500 rounded-md px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-out"
              href=""
            >
              Skills
            </Link>
            <Link
              className="bg-blue-500 rounded-md px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-out"
              href=""
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href=""
              className="w-10 h-10 bg-gray-500 text-xl rounded-full flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300 ease-out"
            >
              <FaGithub />
            </Link>
            <Link
              href=""
              className="w-10 h-10 bg-blue-500 text-xl rounded-full flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300 ease-out"
            >
              <FaLinkedin />
            </Link>
            <Link
              href=""
              className="w-10 h-10 bg-green-500 text-xl rounded-full flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300 ease-out"
            >
              <FaWhatsapp />
            </Link>
          </div>
          {/* Hamburger Icon for mobile view */}
          <div className="md:hidden">
            <button
              className="flex items-center"
              onClick={toggleDrawer}
              aria-label="Toggle navigation"
            >
              {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Drawer (for mobile view) */}
        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-10"></div>
        )}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-blue-500 text-white flex flex-col items-center text-3xl p-4 space-y-12 transition-transform duration-300 ease-out transform z-20 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={toggleDrawer} className="self-end">
            <FaTimes size={24} />
          </button>
          <Link href="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link href="" onClick={toggleDrawer}>
            About
          </Link>
          <Link href="" onClick={toggleDrawer}>
            Projects
          </Link>
          <Link href="" onClick={toggleDrawer}>
            Skills
          </Link>
          <Link href="" onClick={toggleDrawer}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
