"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed font-rubik top-0 left-0 w-full py-4 px-6 z-10 shadow-lg bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            Enrico
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-xl font-rubik font-bold hover:text-gray-300"
            onClick={toggleMenu}
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="space-y-2"
            >
              <motion.span
                className="block h-0.5 w-8 bg-black"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-8 bg-black"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-8 bg-black"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
          {isOpen && (
            <div className="absolute right-6 mt-4 bg-white rounded shadow-lg p-4">
              <Link href="#Home">
                <div className="text-black justify-center text-xl font-rubik font-bold hover:text-blue-300">
                  Home
                </div>
              </Link>
              <Link href="#About Us">
                <div className="text-black justify-center text-xl font-rubik font-bold hover:text-blue-300">
                  About Me
                </div>
              </Link>
              <div className="border-b my-2"></div>
              <Link href="#Portfolio">
                <div className="text-black justify-center text-xl font-rubik font-bold hover:text-blue-300">
                  Portfolio
                </div>
              </Link>
              <div className="border-b my-2"></div>
              <Link href="#Contact Me">
                <div className="text-black justify-center text-xl font-rubik font-bold hover:text-blue-300">
                  Contact Me
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-6 items-center">
          <li>
              <Link href="#Home" passHref className="text-black font-bold font-rubik hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#About Us" passHref className="text-black font-bold font-rubik hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#Portfolio" passHref className="text-black font-bold font-rubik hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#Contact Me" passHref className="text-black font-bold font-rubik hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
