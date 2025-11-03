
import Link from 'next/link';

const BlogCard = ({ image, date, title }: { image: string; date: string; title: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <Link href="/blog-post" className="text-blue-600 font-semibold mt-4 inline-block">Read more</Link>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  const posts = [
    { image: 'https://picsum.photos/id/1074/300/200', date: 'October 28, 2025', title: 'How to save on car insurance' },
    { image: 'https://picsum.photos/id/106/300/200', date: 'October 25, 2025', title: 'Understanding home insurance deductibles' },
    { image: 'https://picsum.photos/id/20/300/200', date: 'October 22, 2025', title: 'Top 5 business insurance myths' },
    { image: 'https://picsum.photos/id/1015/300/200', date: 'October 19, 2025', title: 'A guide to life insurance in Canada' },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Insurance Blog And News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} image={post.image} date={post.date} title={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
