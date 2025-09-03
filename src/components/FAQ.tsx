'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1); // Second FAQ is open by default

  const faqs = [
    {
      question: "What types of brands do you work with?",
      answer: "We work with innovative and quality-focused brands across various industries. Our expertise spans consumer goods, electronics, home and garden products, and more. We're particularly interested in brands that are committed to quality and have strong market potential."
    },
    {
      question: "How do you ensure brand protection and pricing integrity?",
      answer: "We are committed to protecting your brand's integrity and pricing policies. We work closely with brand partners to maintain consistent pricing across all marketplaces and ensure your brand identity is preserved."
    },
    {
      question: "What is your minimum order quantity for wholesale partnerships?",
      answer: "Our minimum order quantities vary depending on the product category and brand requirements. We work with brands of all sizes and can accommodate different volume needs. Contact us to discuss specific requirements for your products."
    },
    {
      question: "Do you provide marketing and sales support for your brand partners?",
      answer: "Yes, we provide comprehensive marketing and sales support including marketplace optimization, advertising campaigns, inventory management, and performance analytics. Our team works closely with brand partners to maximize sales potential."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Partnership Support</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left hover:text-blue-600 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {String(index + 1).padStart(2, '0')}. {faq.question}
                    </span>
                    <span className="text-gray-500 text-xl flex-shrink-0">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="mt-3 pr-8">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
           
            <div className="mt-8">
              <Link 
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 relative group inline-block"
              >
                Partner With Us
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full transform rotate-12 group-hover:scale-110 transition-transform duration-200">
                  Trusted Partner
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
