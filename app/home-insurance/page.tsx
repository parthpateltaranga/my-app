import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomeInsurancePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Home Insurance in Canada</h1>
        <p className="mt-4">Home insurance in Canada helps protect your home and belongings against theft, loss, or damage, and can also cover additional living expenses if you're temporarily displaced. It typically includes personal property coverage and liability coverage. While not legally required, mortgage lenders often mandate home insurance.</p>

        <h2 className="text-2xl font-bold mt-8">Types of Home Insurance</h2>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Homeowner's Insurance:</strong> Covers the building, contents, and outbuildings on your property, along with personal liability.</li>
          <li><strong>Tenant's/Renter's Insurance:</strong> Protects your personal belongings and provides liability coverage if you rent an apartment or home. Premiums are generally lower than homeowner's insurance.</li>
          <li><strong>Condominium Insurance:</strong> Covers damage or loss to the inside of your condo unit, your storage locker, and personal liability. The condo corporation's insurance typically covers the building's exterior and common areas.</li>
          <li><strong>Seasonal or Other Property Insurance:</strong> Available for cottages, mobile homes, or other recreational properties.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Levels of Coverage</h2>
        <p className="mt-4">Home insurance policies offer different levels of protection:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Comprehensive:</strong> The most inclusive, covering your home for all risks except those specifically excluded.</li>
          <li><strong>Broad:</strong> A hybrid policy where the home is covered for all risks (except exclusions), but personal property is covered only for named perils.</li>
          <li><strong>Basic or Named Perils:</strong> Covers only the specific risks or perils listed in the policy.</li>
          <li><strong>Fire and Extended Coverage:</strong> Provides minimal coverage, primarily for fire and a few other specified risks.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Factors Affecting Premiums</h2>
        <p className="mt-4">Several factors influence your home insurance premiums:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Location:</strong> Geographic location and local crime rates play a role.</li>
          <li><strong>Home Characteristics:</strong> The value, age, type of residence, structure, and replacement value of your home are considered.</li>
          <li><strong>Coverage and Deductible:</strong> The amount of coverage you choose and your deductible amount will impact the cost.</li>
          <li><strong>Claims History:</strong> Your past insurance claims can affect your rates.</li>
          <li><strong>Credit Score:</strong> In some provinces, your credit score may be used as a rating factor to determine premiums.</li>
          <li><strong>Add-ons:</strong> Additional coverages like earthquake, sewer backup, or overland water can increase costs.</li>
        </ul>

        <p className="mt-8">It is recommended to consult with a local qualified insurance representative for the most up-to-date information on specific requirements in your province or territory.</p>
      </main>
      <Footer />
    </>
  );
};

export default HomeInsurancePage;
