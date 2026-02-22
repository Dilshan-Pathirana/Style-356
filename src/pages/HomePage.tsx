import React from 'react'
import { motion } from 'framer-motion'
import { HeroSlider } from '../components/home/HeroSlider'
import { FeaturedCategories } from '../components/home/FeaturedCategories'
import { NewArrivals } from '../components/home/NewArrivals'
import { TrendingSection } from '../components/home/TrendingSection'
import { SocialProof } from '../components/home/SocialProof'
import { StoreLocations } from '../components/home/StoreLocations'

export function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <HeroSlider />
      <FeaturedCategories />
      <NewArrivals />
      <TrendingSection />
      <StoreLocations />
      <SocialProof />
    </motion.main>
  )
}
