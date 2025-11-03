import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FAQ from '../../components/FAQ';

const FAQPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
