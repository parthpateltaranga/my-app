
import Header from '../components/Header';
import Hero from '../components/Hero';
import PartnerBar from '../components/PartnerBar';
import ValueProp from '../components/ValueProp';
import Reviews from '../components/Reviews';
import ServiceGrid from '../components/ServiceGrid';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import FeaturedProducts from '../components/FeaturedProducts';
import BundlingCTA from '../components/BundlingCTA';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerBar />
        <ValueProp />
        <Reviews />
        <ServiceGrid />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
        <FeaturedProducts />
        <BundlingCTA />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
