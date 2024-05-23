"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import "./globals.css";
import HamburgerMenu from '@/components/ui/HamburgerMenu'
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex item-center'>
          <Link href="/" className="text-white text-xl font-bold hover:text-gray-300">
            My Portfolio
          </Link>
        </div>
        <div className="md:hidden">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-white text-xl font-bold hover:text-gray-300"
                onClick={toggleMenu}
              >
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}
                ></span>
              </button>
            </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-gray-800'>
                    <Link href="#About Us">
                    <DropdownMenuLabel className="text-white bg-gray-800 justify-center text-xl font-bold hover:text-gray-300">About Me</DropdownMenuLabel>
                    </Link>
                    <DropdownMenuSeparator/>
                    <Link href="#Portfolio">
                    <DropdownMenuLabel className="text-white bg-gray-800 justify-center text-xl font-bold hover:text-gray-300">Portfolio</DropdownMenuLabel>
                    </Link>
                    <DropdownMenuSeparator/>
                    <Link href="#Contact Me">
                    <DropdownMenuLabel className="text-white bg-gray-800  justify-center text-xl font-bold hover:text-gray-300">Contact Me</DropdownMenuLabel>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="md:block hidden md:flex">
          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center">
            <li>
              <Link href="#About Us" passHref className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#Portfolio" passHref className="text-white hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#Contact Me" passHref className="text-white hover:text-gray-300">
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
