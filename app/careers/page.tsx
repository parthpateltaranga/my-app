import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CareersPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Careers at Hinuinsure</h1>
        <p className="mt-4">Hinuinsure is a fast-growing company and we are always looking for talented and motivated individuals to join our team. We offer a dynamic and challenging work environment, competitive compensation and benefits, and opportunities for growth and advancement.</p>

        <h2 className="text-2xl font-bold mt-8">Why Work at Hinuinsure?</h2>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Make a difference:</strong> Help Canadians find the best insurance coverage for their needs.</li>
          <li><strong>Grow your career:</strong> We offer opportunities for growth and advancement.</li>
          <li><strong>Be part of a great team:</strong> We have a friendly and supportive work environment.</li>
          <li><strong>Competitive compensation and benefits:</strong> We offer a competitive salary and benefits package.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Current Openings</h2>
        <p className="mt-4">We are currently hiring for the following positions:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Licensed Insurance Broker</li>
          <li>Customer Service Representative</li>
          <li>Software Developer</li>
        </ul>
        <p className="mt-4">To apply for a position, please send your resume and cover letter to <a href="mailto:careers@hinuinsure.ca" className="text-blue-600">careers@hinuinsure.ca</a>.</p>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
