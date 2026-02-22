import React from 'react'
import { motion } from 'framer-motion'

export function ShippingReturnsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
          Shipping & Returns
        </h1>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p>Islandwide delivery within 2-4 business days for in-stock items.</p>
          <p>Orders are confirmed via WhatsApp before dispatch.</p>
          <p>Returns are accepted within 7 days for unworn items with original tags.</p>
          <p>Exchange requests are processed based on size and stock availability.</p>
        </div>
      </div>
    </motion.main>
  )
}
