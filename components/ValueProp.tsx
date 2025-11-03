
import Image from 'next/image';

const ValueProp = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url("https://picsum.photos/id/1015/1920/1080")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-8 max-w-3xl">
        <h2 className="text-5xl font-bold">Tailored Insurance Solutions for Your Unique Needs</h2>
        <p className="text-lg mt-4 leading-relaxed">At InsureCo, we understand that everyone's insurance needs are different. That's why we offer personalized coverage options designed to protect what matters most to you, whether it's your home, car, business, or family. Get peace of mind with policies that fit your life and your budget.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-8 transition duration-300 ease-in-out transform hover:scale-105">Get Quote</button>
      </div>
    </div>
  );
};

export default ValueProp;
