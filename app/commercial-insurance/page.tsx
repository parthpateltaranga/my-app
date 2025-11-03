import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CommercialInsurancePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Commercial Insurance in Canada</h1>
        <p className="mt-4">Commercial insurance in Canada, also known as business insurance, provides financial protection for businesses against various risks and unforeseen events. While not always legally mandatory, it is highly recommended for businesses of all sizes to safeguard against potential financial losses.</p>

        <h2 className="text-2xl font-bold mt-8">Common Types of Commercial Insurance</h2>
        <p className="mt-4">Businesses can choose from a variety of insurance types, often bundled into comprehensive policies, especially for small businesses. Some common types include:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Commercial General Liability (CGL) Insurance:</strong> This foundational insurance protects against third-party claims for bodily injury, property damage, personal injury, or advertising injury arising from business operations.</li>
          <li><strong>Commercial Property Insurance:</strong> Protects a business's physical assets, such as buildings, equipment, machinery, inventory, and computer systems, against loss or damage from perils like fire, theft, and vandalism.</li>
          <li><strong>Professional Liability Insurance (Errors & Omissions - E&O):</strong> Essential for businesses that provide advice or services, it covers allegations of professional negligence, failure to deliver promised services, or mistakes that cause financial harm to clients.</li>
          <li><strong>Business Interruption Insurance:</strong> Provides financial support to cover lost income and ongoing expenses (like rent, utilities, and payroll) if a business is forced to close temporarily due to an insurable loss.</li>
          <li><strong>Commercial Auto Insurance:</strong> Covers vehicles used for business purposes, including company-registered cars, trucks, and fleets.</li>
          <li><strong>Cyber Liability Insurance:</strong> Protects against financial losses and expenses resulting from cyber-attacks, data breaches, and other online threats.</li>
          <li><strong>Product Liability Insurance:</strong> Important for businesses that sell, manufacture, or distribute products, it protects against claims of third-party bodily injury or property damage caused by a product.</li>
          <li><strong>Commercial Umbrella Insurance:</strong> Provides an additional layer of liability protection beyond the limits of primary insurance policies.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Importance of Commercial Insurance</h2>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Liability Protection:</strong> It shields companies from costs associated with accidents, injuries, and third-party property damage. This can cover claimed damages and legal fees if lawsuits arise.</li>
          <li><strong>Financial Security and Business Continuity:</strong> Adequate coverage can prevent significant financial losses or even bankruptcy due to unexpected events. For instance, business interruption insurance can cover lost income and ongoing expenses if operations are halted due to an insured event like a fire.</li>
          <li><strong>Prerequisite for Business Operations:</strong> Financial institutions and commercial property owners often require businesses to carry certain types of insurance (e.g., commercial property and general liability) as a condition for loans or leases.</li>
        </ul>

        <p className="mt-8">It is recommended to consult with a local qualified insurance representative for the most up-to-date information on specific requirements for your business.</p>
      </main>
      <Footer />
    </>
  );
};

export default CommercialInsurancePage;
