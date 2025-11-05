
'use client';

import { useState } from 'react';

const Hero = ({ onGetQuoteClick }: { onGetQuoteClick: () => void }) => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070')" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-start">
          <div className="w-full md:w-1/2 text-left">
            <div className="bg-white bg-opacity-90 p-12 rounded-lg shadow-lg animate-fade-in-down">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">Your Trusted Insurance Partner</h1>
              <p className="text-xl text-gray-600 mb-8">Protecting what matters most with tailored insurance solutions.</p>
              <button onClick={onGetQuoteClick} className="bg-blue-600 text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

