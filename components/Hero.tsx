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
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">Helping Canadians Find The Best Insurance Rates</h1>
            <p className="text-lg text-gray-600 mt-4">Shop and compare quotes for car, home & business insurance...</p>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex border-b">
                <button onClick={() => setActiveTab('auto')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'auto' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Auto</button>
                <button onClick={() => setActiveTab('home')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'home' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Home</button>
                <button onClick={() => setActiveTab('business')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'business' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Business</button>
                <button onClick={() => setActiveTab('life')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'life' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Life</button>
              </div>
              <div className="mt-6">
                <form>
                  <div className="flex space-x-4">
                    <input type="text" placeholder="Postal Code" className="w-full p-4 border border-gray-300 rounded-md" />
                    <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold">Get quotes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            {/* Empty div for spacing */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
