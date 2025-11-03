
import { FaShieldAlt, FaMoneyBillAlt, FaRocket, FaComments, FaGraduationCap, FaLock } from 'react-icons/fa';

const BenefitItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => {
  return (
    <div className="text-center">
      <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-blue-600 text-3xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    { icon: FaShieldAlt, title: "We've got all types of insurance" },
    { icon: FaMoneyBillAlt, title: 'Find the lowest rates' },
    { icon: FaRocket, title: 'Getting insured is quick and easy' },
    { icon: FaComments, title: 'Ongoing customer support' },
    { icon: FaGraduationCap, title: 'Advice from insurance experts' },
    { icon: FaLock, title: 'Your information is safe and secure' },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why choose Hinuinsure?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} icon={benefit.icon} title={benefit.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
