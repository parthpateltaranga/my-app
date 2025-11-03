import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const MoreInsurancePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">More Insurance Products</h1>
        <p className="mt-4">We offer a wide range of insurance products to meet your needs. Explore our other insurance products below:</p>
        <ul className="list-disc list-inside mt-4">
          <li><Link href="/tenant-insurance" className="text-blue-600">Tenant Insurance</Link></li>
          <li><Link href="/condo-insurance" className="text-blue-600">Condo Insurance</Link></li>
          <li><Link href="/life-insurance" className="text-blue-600">Life Insurance</Link></li>
          <li><Link href="/travel-insurance" className="text-blue-600">Travel Insurance</Link></li>
          <li><Link href="/high-risk-insurance" className="text-blue-600">High-risk Insurance</Link></li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default MoreInsurancePage;
