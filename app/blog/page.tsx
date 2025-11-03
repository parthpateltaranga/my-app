import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const BlogPage = () => {
  const posts = [
    { image: 'https://picsum.photos/id/1074/300/200', date: 'October 28, 2025', title: 'How to save on car insurance', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { image: 'https://picsum.photos/id/106/300/200', date: 'October 25, 2025', title: 'Understanding home insurance deductibles', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { image: 'https://picsum.photos/id/20/300/200', date: 'October 22, 2025', title: 'Top 5 business insurance myths', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { image: 'https://picsum.photos/id/1015/300/200', date: 'October 19, 2025', title: 'A guide to life insurance in Canada', excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Insurance Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link href="/blog-post" className="text-blue-600 font-semibold mt-4 inline-block">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
