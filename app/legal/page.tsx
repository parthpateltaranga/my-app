import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4">This Privacy Policy was last updated on November 3, 2025.</p>
        <p className="mt-4">Hinuinsure is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and disclose your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA).</p>

        <h2 className="text-2xl font-bold mt-8">1. Accountability</h2>
        <p className="mt-4">We are responsible for all personal information under our control. We have designated a Privacy Officer who is accountable for our compliance with this Privacy Policy and applicable privacy laws.</p>

        <h2 className="text-2xl font-bold mt-8">2. Identifying Purposes</h2>
        <p className="mt-4">We will identify the purposes for which we collect personal information at or before the time the information is collected. The primary purposes for which we collect personal information are to provide you with insurance quotes, to administer your insurance policy, and to communicate with you.</p>

        <h2 className="text-2xl font-bold mt-8">3. Consent</h2>
        <p className="mt-4">We will obtain your consent to collect, use, or disclose your personal information, except where otherwise permitted or required by law. You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice.</p>

        <h2 className="text-2xl font-bold mt-8">4. Limiting Collection</h2>
        <p className="mt-4">We will limit the collection of personal information to that which is necessary for the purposes identified by us. We will collect personal information by fair and lawful means.</p>

        <h2 className="text-2xl font-bold mt-8">5. Limiting Use, Disclosure, and Retention</h2>
        <p className="mt-4">We will not use or disclose personal information for purposes other than those for which it was collected, except with your consent or as required by law. We will retain personal information only as long as necessary for the fulfillment of those purposes.</p>

        <h2 className="text-2xl font-bold mt-8">6. Accuracy</h2>
        <p className="mt-4">We will make reasonable efforts to ensure that personal information is as accurate, complete, and up-to-date as is necessary for the purposes for which it is to be used.</p>

        <h2 className="text-2xl font-bold mt-8">7. Safeguards</h2>
        <p className="mt-4">We will protect personal information with security safeguards appropriate to the sensitivity of the information.</p>

        <h2 className="text-2xl font-bold mt-8">8. Openness</h2>
        <p className="mt-4">We will make readily available to you specific information about our policies and practices relating to the management of personal information.</p>

        <h2 className="text-2xl font-bold mt-8">9. Individual Access</h2>
        <p className="mt-4">Upon request, we will inform you of the existence, use, and disclosure of your personal information and will give you access to that information. You will be able to challenge the accuracy and completeness of the information and have it amended as appropriate.</p>

        <h2 className="text-2xl font-bold mt-8">10. Challenging Compliance</h2>
        <p className="mt-4">You may address a challenge concerning compliance with the above principles to our Privacy Officer.</p>

        <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
        <p className="mt-4">If you have any questions about this Privacy Policy or our privacy practices, please contact our Privacy Officer at:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Email: <a href="mailto:privacy@Hinuinsure.ca" className="text-blue-600">privacy@Hinuinsure.ca</a></li>
          <li>Mail: Privacy Officer, Hinuinsure, 123 Insurance St, Toronto, ON, Canada</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
