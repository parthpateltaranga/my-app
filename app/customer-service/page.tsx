import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CustomerServicePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Customer Service</h1>
        <p className="mt-4">At Hinuinsure, we are committed to providing our clients with the highest level of customer service. We understand that insurance can be complex, and we are here to help you every step of the way. Our goal is to make your insurance experience as easy and stress-free as possible.</p>

        <h2 className="text-2xl font-bold mt-8">Our Commitment to You</h2>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Personalized Service:</strong> We take the time to understand your unique needs and provide you with personalized advice and recommendations.</li>
          <li><strong>Expert Advice:</strong> Our team of licensed insurance brokers has the knowledge and expertise to help you make informed decisions about your insurance coverage.</li>
          <li><strong>Exceptional Support:</strong> We are here to help you with all of your insurance needs, from getting a quote to making a claim.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">How to Reach Us</h2>
        <p className="mt-4">We offer a variety of ways to get in touch with us:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Phone:</strong> You can reach us by phone at 1-855-550-5515 during our regular business hours.</li>
          <li><strong>Email:</strong> You can email us at <a href="mailto:support@Hinuinsure.ca" className="text-blue-600">support@Hinuinsure.ca</a> and we will respond to your inquiry as soon as possible.</li>
          <li><strong>Online:</strong> You can also contact us through our <a href="/contact-us" className="text-blue-600">online contact form</a>.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Claims</h2>
        <p className="mt-4">We understand that making a claim can be a stressful experience. Our dedicated claims team is here to help you through the process. We will advocate on your behalf to ensure you get a fair and timely settlement. For more information about our claims process, please visit our <a href="/claims" className="text-blue-600">claims page</a>.</p>

        <h2 className="text-2xl font-bold mt-8">Feedback</h2>
        <p className="mt-4">We are always looking for ways to improve our service. If you have any feedback, please do not hesitate to contact us. We value your input and will use it to make our service even better.</p>
      </main>
      <Footer />
    </>
  );
};

export default CustomerServicePage;
