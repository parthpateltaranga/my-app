import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">We are here to help. Please feel free to contact us with any questions or concerns you may have. We are available by phone, email, or through our online contact form.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <ul className="mt-4">
              <li className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@Hinuinsure.ca" className="text-blue-600">support@Hinuinsure.ca</a>
              </li>
              <li className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1-555-555-5555</span>
              </li>
              <li className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1 Insurance St, Calgary, AB, Canada</span>
              </li>
            </ul>
            <div className="mt-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.992950393533!2d-79.383184384502!3d43.6532259791215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb5b2a4b0b3f%3A0x3b5a6e5a5a5a5a5a!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1635456345634!5m2!1sen!2sca" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <form className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input type="tel" name="phone" id="phone" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Phone" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={5} className="w-full p-4 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
