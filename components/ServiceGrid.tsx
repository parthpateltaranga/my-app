
import { FaCar, FaHome, FaStore, FaExclamationTriangle, FaBuilding, FaKey, FaHeart, FaPlane } from 'react-icons/fa';

const ServiceItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => {
  return (
    <div className="text-center">
      <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-blue-600 text-3xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
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
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Insurance solutions for all aspects of your life</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} title={service.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
