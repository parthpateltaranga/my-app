
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ name, text, avatar, rating }: { name: string; text: string; avatar: string; rating: number }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
      <div className="flex items-center mb-4">
        <Image src={avatar} alt={name} width={50} height={50} className="rounded-full" />
        <div className="ml-4">
          <p className="text-blue-600 font-semibold">{name}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">What our customers say</h2>
          <p className="text-lg text-gray-600 mt-2">Rated 4.7 out of 5 stars based on 1000+ reviews</p>
        </div>
        <div className="flex overflow-x-auto space-x-8 pb-8">
          <ReviewCard name="Jessica Da Rocha" text="Hinuinsure made finding the right insurance so easy! Their team was incredibly helpful and I got a great rate." avatar="https://picsum.photos/id/1011/50/50" rating={5} />
          <ReviewCard name="Farhad A" text="Excellent service and competitive prices. I highly recommend Hinuinsure for all your insurance needs." avatar="https://picsum.photos/id/1012/50/50" rating={5} />
          <ReviewCard name="Paul Irwin" text="I saved a lot by bundling my home and auto insurance through Hinuinsure. The process was seamless." avatar="https://picsum.photos/id/1013/50/50" rating={4} />
          <ReviewCard name="Another User" text="Quick and efficient. Got my quote in minutes and the coverage is exactly what I needed." avatar="https://picsum.photos/id/1014/50/50" rating={5} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
