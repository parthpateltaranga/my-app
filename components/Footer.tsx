
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Hinuinsure</h3>
          <p className="text-gray-400">Your trusted partner for comprehensive insurance solutions. Protecting what matters most to you.</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/auto-insurance" className="text-gray-400 hover:text-white transition duration-300">Auto Insurance</Link></li>
            <li><Link href="/home-insurance" className="text-gray-400 hover:text-white transition duration-300">Home Insurance</Link></li>
            <li><Link href="/life-insurance" className="text-gray-400 hover:text-white transition duration-300">Life Insurance</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</Link></li>
            <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Insurance Lane, Suite 100</p>
          <p className="text-gray-400">Toronto, ON M1M 1M1</p>
          <p className="text-gray-400 mt-2">Phone: <a href="tel:1-555-555-5555" className="font-bold hover:text-blue-400 transition duration-300">1-555-555-5555</a></p>
          <p className="text-gray-400">Email: <a href="mailto:info@hinuinsure.com" className="hover:text-white">info@hinuinsure.com</a></p>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-gray-500 mt-8 border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} Hinuinsure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
