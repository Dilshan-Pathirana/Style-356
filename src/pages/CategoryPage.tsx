import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Filter } from 'lucide-react'
import { ProductCard } from '../components/ui/ProductCard'
import { products } from '../data/products'
import { categories } from '../data/categories'

export function CategoryPage() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState('featured')

  // Find category name from ID (e.g., 'tops' -> 'Tops')
  const category = categories.find(
    (c) => c.link.split('/').pop() === categoryId
  )
  const categoryName = category ? category.name : categoryId

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Filter products by category
    let result = products
    if (categoryName) {
      result = products.filter(
        (p) => p.category.toLowerCase() === categoryName.toLowerCase()
      )
    }

    // Apply sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.tags.includes('new') ? 1 : -1))
    }

    setFilteredProducts([...result])
  }, [categoryId, categoryName, sortBy])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-24 pb-14 md:pb-20 bg-offwhite min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-charcoal">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-charcoal font-medium capitalize">
            {categoryName}
          </span>
        </div>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-3 md:mb-4 capitalize">
            {categoryName}
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Explore our curated collection of {categoryName?.toLowerCase()}. Designed for the modern wardrobe with premium fabrics and timeless silhouettes.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <span className="text-sm text-gray-400">
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 bg-white font-medium text-charcoal rounded-md px-2.5 py-1.5 focus:ring-0 cursor-pointer w-full sm:w-auto"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-charcoal mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              We couldn't find any products in this category.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 px-8 py-3 bg-charcoal text-white rounded-full hover:bg-charcoal/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}
