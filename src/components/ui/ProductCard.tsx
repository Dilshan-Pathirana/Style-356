import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../../data/products'
import { MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
        {/* Main Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Image (if available) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
        )}

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.tags.includes('new') && (
            <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium px-2 py-1 uppercase tracking-wider">
              New
            </span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="bg-gold/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 uppercase tracking-wider">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
          <button className="bg-white/90 backdrop-blur-md text-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-white flex items-center gap-2 w-full justify-center">
            <MessageCircle className="w-4 h-4 text-whatsapp" />
            <span>Inquire</span>
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-charcoal font-medium text-lg leading-tight group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-charcoal font-semibold">
            {product.formattedPrice}
          </span>
          <div className="flex gap-1">
            {product.sizes.slice(0, 3).map((size) => (
              <span
                key={size}
                className="text-[10px] text-gray-400 border border-gray-200 px-1 py-0.5 rounded"
              >
                {size.replace('UK ', '')}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[10px] text-gray-400 px-1 py-0.5">+</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
