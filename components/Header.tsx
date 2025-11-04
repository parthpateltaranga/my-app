
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="top-bar bg-gray-100 py-2 hidden md:block">
        <div className="container mx-auto flex justify-end items-center text-sm">
          <Link href="/auto-insurance" className="text-gray-600 hover:text-blue-600 px-3">Auto Insurance</Link>
          <Link href="/home-insurance" className="text-gray-600 hover:text-blue-600 px-3">Home Insurance</Link>
          <Link href="/commercial-insurance" className="text-gray-600 hover:text-blue-600 px-3">Commercial Insurance</Link>
        </div>
      </div>
      <div className="main-nav py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600">Hinuinsure</span>
          </Link>
          <div className="md:hidden"> {/* Hamburger menu for small screens */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <nav className={`md:flex items-center ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4' : 'hidden'}`}>
            <Link href="/more-insurance" className="text-gray-600 hover:text-blue-600 px-4 py-3 md:py-0 block text-center">More Insurance</Link>
            <Link href="/why-us" className="text-gray-600 hover:text-blue-600 px-4 py-3 md:py-0 block text-center">Why Us</Link>
            <Link href="/customer-service" className="text-gray-600 hover:text-blue-600 px-4 py-3 md:py-0 block text-center">Customer Service</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 px-4 py-3 md:py-0 block text-center">Blog</Link>
            <a href="tel:1-855-550-5515" className="text-blue-600 font-bold text-lg ml-0 md:ml-6 mt-4 md:mt-0 block text-center py-3">1-555-555-5555</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
