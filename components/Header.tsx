
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ onGetQuoteClick }: { onGetQuoteClick?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <span className="text-3xl font-bold text-blue-600">Hinuinsure</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/auto-insurance" className="text-gray-600 hover:text-blue-600">Auto</Link>
          <Link href="/home-insurance" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/life-insurance" className="text-gray-600 hover:text-blue-600">Life</Link>
          <Link href="/commercial-insurance" className="text-gray-600 hover:text-blue-600">Business</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:1-555-555-5555" className="text-blue-600 font-semibold text-lg animate-pulse-slow">1-555-555-5555</a>
          <button onClick={onGetQuoteClick} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">Get a Quote</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/auto-insurance" className="text-gray-600 hover:text-blue-600">Auto</Link>
            <Link href="/home-insurance" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/life-insurance" className="text-gray-600 hover:text-blue-600">Life</Link>
            <Link href="/commercial-insurance" className="text-gray-600 hover:text-blue-600">Business</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <a href="tel:1-555-555-5555" className="text-gray-600 hover:text-blue-600">1-555-555-5555</a>
            <button onClick={onGetQuoteClick} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">Get a Quote</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
