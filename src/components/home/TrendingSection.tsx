import React from 'react'
import { ProductCard } from '../ui/ProductCard'
import { products } from '../../data/products'

export function TrendingSection() {
  // Get trending items
  const trending = products
    .filter((p) => p.tags.includes('trending'))
    .slice(0, 4)

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-charcoal mb-3 md:mb-4">
            Trending Now
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The pieces everyone is talking about. Shop our most coveted styles
            before they're gone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
