import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// Layout
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloat } from './components/ui/WhatsAppFloat'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { BackToTop } from './components/ui/BackToTop'
// Pages
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* Fallback for other routes to Home for demo */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-offwhite font-sans text-charcoal selection:bg-gold selection:text-white">
        <ScrollToTop />
        <ScrollProgress />
        <Header />

        <div className="flex-grow">
          <AnimatedRoutes />
        </div>

        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </div>
    </Router>
  )
}
