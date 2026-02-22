import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Select your product and size, then tap Order via WhatsApp to confirm with our team.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Islandwide delivery usually takes 2-4 business days after confirmation.',
  },
  {
    q: 'Can I exchange sizes?',
    a: 'Yes, exchanges are available within 7 days for unworn items with tags, subject to stock.',
  },
  {
    q: 'Do you have physical stores?',
    a: 'Yes, we currently operate in Colombo, Kandy, and Havelock City Mall.',
  },
]

export function FaqPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8">FAQ</h1>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="bg-white border border-gray-200 rounded-lg p-5">
              <h2 className="font-semibold text-charcoal mb-2">{item.q}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
