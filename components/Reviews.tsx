
import Image from 'next/image';

const ReviewCard = ({ name, text, avatar }: { name: string; text: string; avatar: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
      <div className="flex items-center mb-4">
        <Image src={avatar} alt={name} width={50} height={50} className="rounded-full" />
        <p className="text-blue-600 font-semibold ml-4">{name}</p>
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
          <h2 className="text-4xl font-bold text-gray-800">5 star insurance</h2>
          <p className="text-lg text-gray-600 mt-2">Rated 4.7 out of 5 stars...</p>
        </div>
        <div className="flex overflow-x-auto space-x-8 pb-8">
          <ReviewCard name="Jessica Da Rocha" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua." avatar="https://picsum.photos/id/1011/50/50" />
          <ReviewCard name="Farhad A" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." avatar="https://picsum.photos/id/1012/50/50" />
          <ReviewCard name="Paul Irwin" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." avatar="https://picsum.photos/id/1013/50/50" />
          <ReviewCard name="Another User" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." avatar="https://picsum.photos/id/1014/50/50" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
