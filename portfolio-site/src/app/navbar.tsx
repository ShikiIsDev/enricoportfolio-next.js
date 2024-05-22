import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex item-center'>
          <Link href="/" className="text-white text-xl font-bold hover:text-gray-300">
            My Portfolio
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/about" passHref className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref className="text-white hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref className="text-white hover:text-gray-300">
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