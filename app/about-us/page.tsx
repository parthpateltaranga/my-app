import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">About Hinuinsure</h1>
        <p className="mt-4">Hinuinsure is a leading Canadian insurance brokerage. We are committed to providing our clients with the best possible service and advice. We are an independent brokerage, which means we work for you, not the insurance companies. We have access to a wide range of insurance products from Canada's top insurance companies, so you can be sure you're getting the best possible value.</p>

        <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
        <p className="mt-4">Our mission is to help Canadians find the best insurance rates and coverage for their needs. We are committed to providing our clients with expert advice, exceptional service, and the best possible value. We want to make the insurance process as easy and stress-free as possible.</p>

        <h2 className="text-2xl font-bold mt-8">Our Team</h2>
        <p className="mt-4">Our team of licensed insurance brokers has the knowledge and expertise to help you navigate the complex world of insurance. We are committed to helping you make informed decisions about your insurance coverage. We are always just a phone call or email away.</p>

        <h2 className="text-2xl font-bold mt-8">Our History</h2>
        <p className="mt-4">Hinuinsure was founded in 2005 with the goal of helping Canadians save money on their insurance. Since then, we have grown to become one of the largest insurance brokerages in Canada. We are proud to have helped thousands of Canadians find the right insurance coverage for their needs.</p>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
