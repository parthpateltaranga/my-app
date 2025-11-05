
import { FaShieldAlt, FaMoneyBillAlt, FaRocket, FaComments, FaGraduationCap, FaLock } from 'react-icons/fa';
import Link from 'next/link';

const BenefitItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center group">
      <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-blue-600 text-4xl group-hover:bg-blue-600 group-hover:text-white transition duration-300">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-blue-600 transition duration-300">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    { icon: FaShieldAlt, title: "Comprehensive Coverage", description: "Access a wide range of insurance options to suit every need." },
    { icon: FaMoneyBillAlt, title: 'Competitive Rates', description: 'Find the best prices by comparing quotes from top providers.' },
    { icon: FaRocket, title: 'Quick & Easy Process', description: 'Get insured swiftly with our streamlined online experience.' },
    { icon: FaComments, title: 'Dedicated Support', description: 'Receive ongoing assistance from our friendly customer service team.' },
    { icon: FaGraduationCap, title: 'Expert Advice', description: 'Benefit from insights and guidance from seasoned insurance professionals.' },
    { icon: FaLock, title: 'Secure & Private', description: 'Your personal information is always protected with advanced security.' },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Hinuinsure?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/why-us" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">Learn More About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
