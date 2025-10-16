'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long does it take?',
      answer: 'Most users complete the entire process in 20-30 minutes. Once you finish all required offers, your $100 Crumbl gift card will be delivered via email within 24-48 hours.',
    },
    {
      question: 'What kind of offers are required?',
      answer: 'You\'ll need to complete 5+ simple offers such as downloading mobile apps, signing up for free trials, completing surveys, or subscribing to newsletters. All offers are clearly explained before you start.',
    },
    {
      question: 'How will I get the gift card?',
      answer: 'Your $100 Crumbl gift card will be sent directly to the email address you provide. You can use it online or print it to redeem in-store at any Crumbl location.',
    },
    {
      question: 'Is this really free?',
      answer: 'Yes! There is no cost to participate. You simply need to complete the survey and required offers to receive your gift card. Some offers may require free trials or subscriptions that you can cancel anytime.',
    },
    {
      question: 'Can I do this more than once?',
      answer: 'This offer is limited to one reward per person, per household. Multiple entries from the same person or address will not be eligible for additional rewards.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to know about earning your reward
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-crumbl-light-pink to-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-white transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-heading font-bold text-black pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-3xl text-crumbl-pink transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
