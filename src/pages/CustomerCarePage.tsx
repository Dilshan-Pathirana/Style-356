import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const careLinks = [
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Shipping & Returns', to: '/shipping-returns' },
  { label: 'Size Guide', to: '/size-guide' },
  { label: 'Store Locations', to: '/store-locations' },
  { label: 'FAQ', to: '/faq' },
]

export function CustomerCarePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
          Customer Care
        </h1>
        <p className="text-gray-500 mb-10">
          Everything you need before and after your purchase.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {careLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="bg-white border border-gray-200 px-6 py-5 rounded-lg hover:border-gold hover:text-gold transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
