import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GetAQuote = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-8">Get a Quote</h1>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full p-3 border border-gray-300 rounded-md"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GetAQuote;