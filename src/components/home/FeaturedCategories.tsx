import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../../data/categories'

export function FeaturedCategories() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Curated Collections
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our thoughtfully designed categories, each piece crafted to
            elevate your everyday style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative h-[400px] overflow-hidden block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-serif font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {category.name}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 text-gold">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
