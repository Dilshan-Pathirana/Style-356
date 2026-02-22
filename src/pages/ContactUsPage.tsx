import React from 'react'
import { motion } from 'framer-motion'

export function ContactUsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Contact Us</h1>
        <div className="space-y-4 text-gray-600">
          <p>Email: hello@style365.lk</p>
          <p>Phone: +94 77 123 4567</p>
          <p>WhatsApp: +94 77 123 4567</p>
          <p>Support Hours: Monday - Saturday, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </motion.main>
  )
}
