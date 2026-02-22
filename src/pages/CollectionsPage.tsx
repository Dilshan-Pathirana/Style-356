import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../data/categories'

export function CollectionsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-3">
            Collections
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Browse curated categories designed around lifestyle, fit, and season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative h-[380px] overflow-hidden block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h2 className="text-2xl font-serif font-bold mb-2">{category.name}</h2>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
