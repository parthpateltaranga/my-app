
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="top-bar bg-gray-100 py-2">
        <div className="container mx-auto flex justify-end items-center text-sm">
          <Link href="/auto-insurance" className="text-gray-600 hover:text-blue-600 px-3">Auto Insurance</Link>
          <Link href="/home-insurance" className="text-gray-600 hover:text-blue-600 px-3">Home Insurance</Link>
          <Link href="/commercial-insurance" className="text-gray-600 hover:text-blue-600 px-3">Commercial Insurance</Link>
        </div>
      </div>
      <div className="main-nav py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600">Hinuinsure</span>
          </Link>
          <nav className="flex items-center">
            <Link href="/more-insurance" className="text-gray-600 hover:text-blue-600 px-4">More Insurance</Link>
            <Link href="/why-us" className="text-gray-600 hover:text-blue-600 px-4">Why Us</Link>
            <Link href="/customer-service" className="text-gray-600 hover:text-blue-600 px-4">Customer Service</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 px-4">Blog</Link>
            <a href="tel:1-855-550-5515" className="text-blue-600 font-bold text-lg ml-6">1-555-555-5555</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
