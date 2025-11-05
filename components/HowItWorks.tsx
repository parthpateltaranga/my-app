
import { FaFileAlt, FaUserCheck, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const HowItWorks = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Switch and save on your insurance today</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-8 md:space-y-0 mt-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center text-blue-600 text-4xl">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-semibold mt-4">Compare quotes</h3>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center text-blue-600 text-4xl">
              <FaUserCheck />
            </div>
            <h3 className="text-xl font-semibold mt-4">Get personalized coverage</h3>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center text-blue-600 text-4xl">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-semibold mt-4">Buy your insurance</h3>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/get-started" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
