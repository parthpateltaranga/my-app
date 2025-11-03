'use client';

import { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 px-6 flex justify-between items-center">
        <span className="text-lg font-semibold">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: 'Is car insurance mandatory in Canada?', answer: 'Yes, car insurance is mandatory across all Canadian provinces and territories. The minimum coverage requirements vary by province, but typically include third-party liability, accident benefits, and uninsured automobile coverage.' },
    { question: 'How does the no-fault insurance system work in some Canadian provinces?', answer: 'In provinces with a no-fault system (like Ontario and Quebec), you deal directly with your own insurance company for claims, regardless of who was at fault for an accident. This aims to streamline the claims process and reduce litigation, though \'fault\' can still be determined for other purposes.' },
    { question: 'What factors affect my home insurance premium in Canada?', answer: 'Several factors influence your home insurance premium, including the age and construction of your home, its location, proximity to fire hydrants and fire stations, claims history, and the type of coverage you choose. Your credit score may also be a factor in some provinces.' },
    { question: 'Can I bundle my insurance policies for a discount in Canada?', answer: 'Absolutely! Many Canadian insurance providers offer discounts when you bundle multiple policies, such as combining your car and home insurance. It\'s a great way to save money and simplify your insurance management.' },
    { question: 'What is a deductible in Canadian insurance?', answer: 'A deductible is the amount of money you agree to pay out-of-pocket towards a claim before your insurance coverage kicks in. Choosing a higher deductible typically lowers your premium, but means you\'ll pay more if you make a claim.' },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What you need to know about getting insurance in Canada</h2>
        <div className="border rounded-lg">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
