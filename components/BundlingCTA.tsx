
import Link from 'next/link';

const BundlingCTA = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1-4">
          <h2 className="text-4xl font-bold">Bundling is a better way to save on your insurance</h2>
          <p className="text-lg mt-4">Combine your home and auto insurance to save more.</p>
        </div>
        <div className="w-1-2 text-left">
          <Link href="/get-started" className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg mt-8 inline-block" style={{ transform: 'translateX(-300px)' }}>Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default BundlingCTA;
