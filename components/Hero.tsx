'use client';

import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('auto');

  return (
    <div 
      className="bg-cover bg-center py-20" 
      style={{ backgroundImage: "url('https://picsum.photos/id/1018/1200/600')" }}
    >
      <div className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">Helping Canadians Find The Best Insurance Rates</h1>
            <p className="text-base sm:text-lg text-white mt-4">Shop and compare quotes for car, home & business insurance...</p>
            <div className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md mx-auto md:mx-0">
              <div className="flex flex-wrap justify-center border-b">
                <button onClick={() => setActiveTab('auto')} className={`px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold ${activeTab === 'auto' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Auto</button>
                <button onClick={() => setActiveTab('home')} className={`px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold ${activeTab === 'home' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Home</button>
                <button onClick={() => setActiveTab('business')} className={`px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold ${activeTab === 'business' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Business</button>
                <button onClick={() => setActiveTab('life')} className={`px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold ${activeTab === 'life' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Life</button>
              </div>
              <div className="mt-6">
                <form>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <input type="text" placeholder="Postal Code" className="w-full p-3 sm:p-4 border border-gray-300 rounded-md" />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold">Get quotes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
