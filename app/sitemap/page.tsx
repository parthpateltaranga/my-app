
import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Sitemap</h1>
      <ul className="list-disc list-inside mt-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/auto-insurance">Auto Insurance</Link></li>
        <li><Link href="/home-insurance">Home Insurance</Link></li>
        <li><Link href="/commercial-insurance">Commercial Insurance</Link></li>
        <li><Link href="/more-insurance">More Insurance</Link></li>
        <li><Link href="/why-us">Why Us</Link></li>
        <li><Link href="/customer-service">Customer Service</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact-us">Contact Us</Link></li>
        <li><Link href="/claims">Claims</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
        <li><Link href="/legal">Legal & Disclosure</Link></li>
        <li><Link href="/accessibility">Accessibility</Link></li>
        <li><Link href="/sitemap">Sitemap</Link></li>
      </ul>
    </div>
  );
};

export default SitemapPage;
