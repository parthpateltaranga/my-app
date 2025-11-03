
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-20 pb-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Our Company</h3>
          <ul>
            <li><Link href="/about-us" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul>
            <li><Link href="/contact-us" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link href="/claims" className="hover:text-blue-400">Claims</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <p>1 Insurance St, Calgary, AB</p>
          <p>Phone: 1-555-555-5555</p>
          <p>Email: info@Hinuinsure.ca</p>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <div className="flex justify-center space-x-6">
          <Link href="/privacy" className="hover:text-blue-400">Privacy</Link>
          <Link href="/legal" className="hover:text-blue-400">Legal & Disclosure</Link>
          <Link href="/accessibility" className="hover:text-blue-400">Accessibility</Link>
          <Link href="/sitemap" className="hover:text-blue-400">Sitemap</Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Hinuinsure.ca. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
