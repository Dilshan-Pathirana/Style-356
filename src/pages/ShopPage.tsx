import React from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '../components/ui/ProductCard'
import { products } from '../data/products'

export function ShopPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-24 pb-14 md:pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-3">
            Shop
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Discover our complete collection of premium women’s wear curated for modern Sri Lankan style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.main>
  )
}
