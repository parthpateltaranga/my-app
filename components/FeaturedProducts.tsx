
import { FaCar, FaHome, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const ProductSection = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => {
  return (
    <div className="flex items-start space-x-8">
      <div className="bg-blue-100 rounded-full w-20 h-20 flex-shrink-0 flex items-center justify-center text-blue-600 text-3xl">
        <Icon />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <div className="mt-2 text-gray-600">{children}</div>
        <Link href="/learn-more" className="text-blue-600 font-semibold mt-4 inline-block">Learn more</Link>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">We've got you covered for all your insurance needs</h2>
        <div className="space-y-16 max-w-4xl mx-auto text-left">
          <ProductSection icon={FaCar} title="Auto Insurance">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </ProductSection>
          <ProductSection icon={FaHome} title="Home Insurance">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </ProductSection>
          <ProductSection icon={FaBriefcase} title="Business Insurance">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </ProductSection>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
