
'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-blue-600 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of insurance do you offer?',
      answer: 'We offer a wide range of insurance products including auto, home, life, commercial, and more. Our goal is to provide comprehensive coverage tailored to your specific needs.',
    },
    {
      question: 'How can I get a quote?',
      answer: 'Getting a quote is easy! Simply click on the \'Get a Quote\' button on our website, fill out the short form, and one of our insurance specialists will get back to you with personalized options.',
    },
    {
      question: 'Do you offer bundled insurance options?',
      answer: 'Yes, we do! Bundling your insurance policies, such as home and auto, can often lead to significant savings. Contact us to learn more about our bundling options.',
    },
    {
      question: 'How do I file a claim?',
      answer: 'To file a claim, please visit our \'Claims\' page for detailed instructions and contact information. Our team is here to guide you through the process.',
    },
    {
      question: 'What makes Hinuinsure different?',
      answer: 'At Hinuinsure, we pride ourselves on personalized service, competitive rates, and expert advice. We work with over 50 top insurance providers to ensure you get the best coverage.',
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">Still have questions? We're here to help!</p>
          <Link href="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
