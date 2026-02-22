import React from 'react'
import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
          About STYLE365
        </h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            STYLE365 is a contemporary women’s fashion label inspired by modern Sri Lankan life.
            We design everyday luxury pieces that balance comfort, elegance, and timeless wearability.
          </p>
          <p>
            Our collections are curated around real wardrobes: elevated workwear, effortless weekend looks,
            and occasion-ready silhouettes. Each drop focuses on premium fabrics, flattering cuts, and versatile styling.
          </p>
          <p>
            We operate both online and in-store, with personalized WhatsApp-based ordering for a fast and friendly shopping experience.
          </p>
        </div>
      </div>
    </motion.main>
  )
}
