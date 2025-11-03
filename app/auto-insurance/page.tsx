import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AutoInsurancePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Auto Insurance in Canada</h1>
        <p className="mt-4">Auto insurance is mandatory for all drivers in Canada. The specific requirements and how insurance is provided can vary by province and territory. This guide will help you understand the basics of auto insurance in Canada.</p>

        <h2 className="text-2xl font-bold mt-8">Mandatory Coverage</h2>
        <p className="mt-4">Every province and territory has its own mandatory auto insurance requirements, which typically include coverage for personal injury and property damage. Common mandatory coverages across Canada are:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Third-Party Liability (TPL):</strong> This covers you if you are responsible for an accident that causes injury or death to another person, or damage to their property. The minimum required coverage is generally $200,000, though many drivers opt for higher limits, such as $1 million or more.</li>
          <li><strong>Accident Benefits:</strong> This coverage helps pay for medical expenses, rehabilitation, and income replacement if you or your passengers are injured in a car accident, regardless of who was at fault. This is mandatory everywhere except Newfoundland and Labrador.</li>
          <li><strong>Uninsured Automobile Coverage:</strong> This protects you financially if you are involved in an accident with an uninsured driver or a hit-and-run incident.</li>
          <li><strong>Direct Compensation – Property Damage (DCPD):</strong> In provinces like Ontario, Quebec, Nova Scotia, New Brunswick, and Prince Edward Island, DCPD covers damage to your vehicle if you are not at fault in an accident. Your own insurer pays for the damages without having to recover from the at-fault driver's insurer.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Optional Coverage</h2>
        <p className="mt-4">Beyond the mandatory coverages, drivers can purchase additional options for more comprehensive protection:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Collision Coverage:</strong> This pays for damage to your own vehicle if it collides with another object or vehicle, or if it rolls over, regardless of fault. It is often mandatory if your vehicle is leased or financed.</li>
          <li><strong>Comprehensive Coverage:</strong> This covers damage to your vehicle from non-collision incidents such as theft, vandalism, fire, hail, falling objects, or animal strikes. This is also often required by lenders for leased or financed vehicles.</li>
          <li><strong>All Perils:</strong> This is the broadest level of coverage, combining collision and comprehensive coverage, often with enhanced theft protection.</li>
          <li><strong>Specified Perils:</strong> This covers damage from specific risks listed in your policy, such as fire, floods, or theft.</li>
          <li><strong>Loss of Use Coverage:</strong> This helps cover the cost of a rental car or other transportation while your vehicle is being repaired after a covered incident.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Public vs. Private Insurance Systems</h2>
        <p className="mt-4">The way auto insurance is administered differs across the country:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Public Insurance:</strong> In British Columbia, Manitoba, and Saskatchewan, mandatory minimum coverage is provided by government insurers (e.g., ICBC in BC, MPI in Manitoba, SGI in Saskatchewan). In these provinces, optional additional coverages can often be purchased from private insurers.</li>
          <li><strong>Private Insurance:</strong> In Alberta, Ontario, Nova Scotia, New Brunswick, Newfoundland, Northwest Territories, Nunavut, Prince Edward Island, and Yukon, you purchase auto insurance from private companies.</li>
          <li><strong>Hybrid System:</strong> Quebec operates a hybrid system where a public insurer covers bodily injuries, while private insurers provide property damage coverage.</li>
        </ul>

        <p className="mt-8">It is recommended to consult with a local qualified insurance representative for the most up-to-date information on specific requirements in your province or territory.</p>
      </main>
      <Footer />
    </>
  );
};

export default AutoInsurancePage;
