
import { FaCar, FaHome, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const ProductSection = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 group">
      <div className="flex items-start space-x-6">
        <div className="bg-blue-100 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-blue-600 text-3xl group-hover:bg-blue-600 group-hover:text-white transition duration-300">
          <Icon />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">{title}</h3>
          <div className="mt-2 text-gray-600">{children}</div>
          <Link href="/learn-more" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">We've got you covered for all your insurance needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductSection icon={FaCar} title="Auto Insurance">
            <p>Comprehensive coverage for your vehicle, protecting you against accidents, theft, and more.</p>
          </ProductSection>
          <ProductSection icon={FaHome} title="Home Insurance">
            <p>Secure your most valuable asset with policies that cover damage, theft, and liability.</p>
          </ProductSection>
          <ProductSection icon={FaBriefcase} title="Business Insurance">
            <p>Tailored insurance solutions to protect your business from unforeseen risks and liabilities.</p>
          </ProductSection>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
