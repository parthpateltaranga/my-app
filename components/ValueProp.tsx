

'use client';

import Image from 'next/image';

const ValueProp = ({ onGetQuoteClick }: { onGetQuoteClick: () => void }) => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image 
            src="https://images.unsplash.com/photo-1528256507509-cc4facea43f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
            alt="Family enjoying their home"
            width={880}
            height={590}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Tailored Insurance Solutions for Your Unique Needs</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">At InsureCo, we understand that everyone's insurance needs are different. That's why we offer personalized coverage options designed to protect what matters most to you, whether it's your home, car, business, or family. Get peace of mind with policies that fit your life and your budget.</p>
          <button onClick={onGetQuoteClick} className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;

