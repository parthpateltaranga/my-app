import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ClaimsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Claims</h1>
        <p className="mt-4">We understand that making a claim can be a stressful experience. Our dedicated claims team is here to help you through the process. We will advocate on your behalf to ensure you get a fair and timely settlement.</p>

        <h2 className="text-2xl font-bold mt-8">How to Make a Claim</h2>
        <p className="mt-4">To make a claim, please contact your insurance company directly. You can find the contact information for your insurance company on your policy documents. If you need assistance, please do not hesitate to contact us.</p>

        <h2 className="text-2xl font-bold mt-8">What to Expect</h2>
        <p className="mt-4">The claims process can vary depending on the type of claim and the insurance company. However, you can generally expect the following steps:</p>
        <ol className="list-decimal list-inside mt-4">
          <li><strong>Report the claim:</strong> Contact your insurance company to report the claim as soon as possible.</li>
          <li><strong>Claim investigation:</strong> The insurance company will investigate the claim to determine the extent of the damage and whether the claim is covered by your policy.</li>
          <li><strong>Claim settlement:</strong> Once the investigation is complete, the insurance company will offer a settlement.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8">Our Role</h2>
        <p className="mt-4">As your insurance broker, we are here to help you through the claims process. We will advocate on your behalf to ensure you get a fair and timely settlement. We can also help you understand your policy and the claims process.</p>
      </main>
      <Footer />
    </>
  );
};

export default ClaimsPage;
