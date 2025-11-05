
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
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
import Modal from '../components/Modal';
import QuoteForm from '../components/QuoteForm';

const PartnerBarWithNoSSR = dynamic(() => import('../components/PartnerBar'), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header onGetQuoteClick={toggleModal} />
      <main>
        <Hero onGetQuoteClick={toggleModal} />
        <PartnerBarWithNoSSR />
        <ValueProp onGetQuoteClick={toggleModal} />
        <Reviews />
        <ServiceGrid />
        <HowItWorks onGetStartedClick={toggleModal} />
        <WhyChooseUs />
        <FAQ />
        <FeaturedProducts />
        <BundlingCTA onGetStartedClick={toggleModal} />
        <BlogPreview />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <QuoteForm />
      </Modal>
    </>
  );
}
