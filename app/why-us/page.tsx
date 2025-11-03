import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WhyUsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Why Choose Hinuinsure?</h1>
        <p className="mt-4">Choosing the right insurance brokerage is a big decision. At Hinuinsure, we are committed to providing our clients with the best possible service and advice. Here are just a few of the reasons why you should choose us for your insurance needs:</p>

        <h2 className="text-2xl font-bold mt-8">We Work for You</h2>
        <p className="mt-4">As an independent insurance brokerage, we work for you, not the insurance companies. This means that we can provide you with unbiased advice and help you find the best coverage for your needs at the most competitive price. We have access to a wide range of insurance products from Canada's top insurance companies, so you can be sure you're getting the best possible value.</p>

        <h2 className="text-2xl font-bold mt-8">Expert Advice</h2>
        <p className="mt-4">Our team of licensed insurance brokers has the knowledge and expertise to help you navigate the complex world of insurance. We will take the time to understand your unique needs and provide you with personalized advice and recommendations. We are committed to helping you make informed decisions about your insurance coverage.</p>

        <h2 className="text-2xl font-bold mt-8">Exceptional Service</h2>
        <p className="mt-4">We are committed to providing our clients with exceptional service. We are here to help you every step of the way, from getting a quote to making a claim. We will advocate on your behalf to ensure you get a fair and timely settlement. We are always just a phone call or email away.</p>

        <h2 className="text-2xl font-bold mt-8">Save Time and Money</h2>
        <p className="mt-4">We can save you time and money by shopping the market for you. We will compare quotes from multiple insurance companies to find you the best coverage at the best price. We can also help you take advantage of any available discounts to save you even more money.</p>

        <p className="mt-8">Contact us today to experience the Hinuinsure difference.</p>
      </main>
      <Footer />
    </>
  );
};

export default WhyUsPage;
