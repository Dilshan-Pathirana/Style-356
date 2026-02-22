import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80',
    collection: 'Summer 2024',
    title: 'The Serenity Collection',
    tagline: 'Effortless elegance for the modern muse.',
    cta: 'View Collection',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80',
    collection: 'New Arrivals',
    title: 'Urban Sophistication',
    tagline: 'Redefining city chic with bold silhouettes.',
    cta: 'Shop Now',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1551803091-e20673f15770?w=1600&q=80',
    collection: 'Limited Edition',
    title: 'Evening Glamour',
    tagline: 'Make a statement at every occasion.',
    cta: 'Explore',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-charcoal">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image with Ken Burns Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 8, ease: 'linear' }}
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto text-white space-y-6">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block text-sm md:text-base uppercase tracking-[0.3em] font-medium text-gold"
              >
                {slides[current].collection}
              </motion.span>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light"
              >
                {slides[current].tagline}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="pt-8"
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 bg-white text-charcoal px-8 py-4 rounded-full font-medium hover:bg-gold hover:text-white transition-all duration-300 group"
                >
                  {slides[current].cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-charcoal transition-all hidden md:block z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-charcoal transition-all hidden md:block z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              current === index
                ? 'w-12 bg-gold'
                : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
