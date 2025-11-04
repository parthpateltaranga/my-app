
import Link from 'next/link';

const BundlingCTA = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold">Bundling is a better way to save on your insurance</h2>
          <p className="text-base sm:text-lg mt-4">Combine your home and auto insurance to save more.</p>
        </div>
        <div className="w-full md:w-1/2">
          <Link href="/get-started" className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg mt-8 inline-block">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default BundlingCTA;
