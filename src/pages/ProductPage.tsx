import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Heart,
  Share2,
  ChevronRight,
  Truck,
  ShieldCheck,
} from 'lucide-react'
import { products } from '../data/products'

export function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id) || products[0]
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedSize('')
    setActiveImage(0)
  }, [id])

  const generateWhatsAppLink = () => {
    const phone = '94771234567'
    const text = `Hi, I'd like to order the ${product.name} ${selectedSize ? `in size ${selectedSize}` : ''}. Is it available?`
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-charcoal">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/" className="hover:text-charcoal">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-charcoal font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
              <motion.img
                key={activeImage}
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {product.tags.includes('new') && (
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  New Arrival
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-colors ${
                    activeImage === idx
                      ? 'border-charcoal'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                {product.name}
              </h1>
              <p className="text-2xl text-charcoal font-medium mb-6">
                {product.formattedPrice}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-medium text-charcoal">Select Size</span>
                <button className="text-sm text-gray-500 underline hover:text-charcoal">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-gray-200 text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-red-500 text-xs mt-2">
                  * Please select a size to order
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-10">
              <a
                href={selectedSize ? generateWhatsAppLink() : '#'}
                target={selectedSize ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => !selectedSize && e.preventDefault()}
                className={`flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-lg transition-all ${
                  selectedSize
                    ? 'bg-whatsapp text-white hover:bg-green-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-full hover:border-charcoal transition-colors font-medium">
                  <Heart className="w-5 h-5" /> Add to Wishlist
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-full hover:border-charcoal transition-colors font-medium">
                  <Share2 className="w-5 h-5" /> Share
                </button>
              </div>
            </div>

            {/* Info Tabs */}
            <div className="space-y-6 border-t border-gray-100 pt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-charcoal">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">
                    Islandwide Delivery
                  </h4>
                  <p className="text-sm text-gray-500">
                    Delivery within 2-3 working days.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-charcoal">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Quality Guarantee</h4>
                  <p className="text-sm text-gray-500">
                    Premium fabrics and craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h4 className="font-medium text-charcoal mb-2">
                  Fabric & Care
                </h4>
                <p className="text-sm text-gray-500">
                  {product.fabric}. {product.care}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
