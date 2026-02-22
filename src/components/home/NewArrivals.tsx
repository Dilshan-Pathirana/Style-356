import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '../ui/ProductCard'
import { products } from '../../data/products'

export function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null)
  // Filter for new/trending items
  const newArrivals = products.slice(0, 6)

  return (
    <section className="py-20 bg-offwhite overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-gold text-sm font-bold tracking-widest uppercase mb-2 block">
              Just Dropped
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">
              New Arrivals
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-medium group">
            View All{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar snap-x snap-mandatory"
        >
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              className="min-w-[280px] md:min-w-[320px] snap-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}

          {/* View All Card for Mobile */}
          <div className="min-w-[200px] flex items-center justify-center md:hidden snap-start">
            <button className="flex flex-col items-center gap-3 text-charcoal">
              <div className="w-12 h-12 rounded-full border border-charcoal flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="font-medium">View All</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
