import React from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '../components/ui/ProductCard'
import { products } from '../data/products'

export function NewArrivalsPage() {
  const newProducts = products.filter((product) => product.tags.includes('new'))

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-3">
            New Arrivals
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Fresh drops this week, from statement dresses to effortless everyday essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.main>
  )
}
