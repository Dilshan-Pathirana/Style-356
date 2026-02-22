import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
import { stores } from '../data/stores'

export function StoresPage() {
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
            Stores
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Visit STYLE365 in person for personalized styling and fit support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <a
                  href={store.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-charcoal hover:bg-gold hover:text-white transition-colors"
                  aria-label="Open map"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <h2 className="text-xl font-serif font-bold text-charcoal mb-2">{store.name}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5" />
                  <span>{store.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
