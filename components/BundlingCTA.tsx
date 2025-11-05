

'use client';

const BundlingCTA = ({ onGetStartedClick }: { onGetStartedClick: () => void }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-lg shadow-lg mx-auto max-w-6xl my-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-8">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Bundle & Save Big on Your Insurance!</h2>
          <p className="text-lg sm:text-xl mt-4 opacity-90">Combine your home and auto insurance to unlock exclusive discounts and comprehensive protection.</p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <button onClick={onGetStartedClick} className="bg-white text-blue-600 px-10 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">Get Started Today</button>
        </div>
      </div>
    </div>
  );
};

export default BundlingCTA;

