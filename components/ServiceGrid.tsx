
import { FaCar, FaHome, FaStore, FaExclamationTriangle, FaBuilding, FaKey, FaHeart, FaPlane } from 'react-icons/fa';
import Link from 'next/link';

const ServiceItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center group">
      <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-blue-600 text-4xl group-hover:bg-blue-600 group-hover:text-white transition duration-300">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition duration-300">{title}</h3>
    </div>
  );
};

const ServiceGrid = () => {
  const services = [
    { icon: FaCar, title: 'Car Insurance' },
    { icon: FaHome, title: 'Home Insurance' },
    { icon: FaStore, title: 'Small Business Insurance' },
    { icon: FaExclamationTriangle, title: 'High-risk Insurance' },
    { icon: FaBuilding, title: 'Condo Insurance' },
    { icon: FaKey, title: 'Tenant Insurance' },
    { icon: FaHeart, title: 'Life Insurance' },
    { icon: FaPlane, title: 'Travel Insurance' },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Comprehensive Insurance Solutions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} title={service.title} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/more-insurance" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">Explore More Services</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
