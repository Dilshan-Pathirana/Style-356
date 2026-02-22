import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
import { stores } from '../../data/stores'

export function StoreLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              Visit Our Stores
            </h2>
            <p className="text-gray-500 max-w-lg">
              Experience the collection in person. Our stylists are ready to
              help you find your perfect fit.
            </p>
          </div>
          <Link
            to="/stores"
            className="text-charcoal font-medium border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All Locations
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <a
                  href={store.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-charcoal hover:bg-gold hover:text-white transition-colors"
                  aria-label="Open in Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                {store.name}
              </h3>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{store.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
