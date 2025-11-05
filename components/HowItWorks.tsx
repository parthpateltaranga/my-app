
import { FaFileAlt, FaUserCheck, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const HowItWorks = ({ onGetStartedClick }: { onGetStartedClick: () => void }) => {
  const steps = [
    { icon: FaFileAlt, title: 'Compare quotes', description: 'Easily compare insurance quotes from top providers in minutes.' },
    { icon: FaUserCheck, title: 'Get personalized coverage', description: 'Receive tailored recommendations that fit your unique needs.' },
    { icon: FaShoppingCart, title: 'Buy your insurance', description: 'Secure your policy online with confidence and ease.' },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Switch and save on your insurance today</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center bg-gray-50 p-8 rounded-lg shadow-md w-full md:w-1/3 group">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="bg-blue-100 rounded-full w-full h-full flex items-center justify-center text-blue-600 text-4xl group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <step.icon />
                </div>
                <div className="absolute -top-2 -left-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold border-4 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition duration-300">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button onClick={onGetStartedClick} className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
