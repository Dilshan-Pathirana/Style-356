import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// Layout
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloat } from './components/ui/WhatsAppFloat'
import { ScrollProgress } from './components/ui/ScrollProgress'
// Pages
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { CategoryPage } from './pages/CategoryPage'
import { ShopPage } from './pages/ShopPage'
import { NewArrivalsPage } from './pages/NewArrivalsPage'
import { CollectionsPage } from './pages/CollectionsPage'
import { AboutPage } from './pages/AboutPage'
import { StoresPage } from './pages/StoresPage'
import { CustomerCarePage } from './pages/CustomerCarePage'
import { ContactUsPage } from './pages/ContactUsPage'
import { ShippingReturnsPage } from './pages/ShippingReturnsPage'
import { SizeGuidePage } from './pages/SizeGuidePage'
import { StoreLocationsPage } from './pages/StoreLocationsPage'
import { FaqPage } from './pages/FaqPage'

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
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/dresses" element={<Navigate to="/category/dresses" replace />} />
        <Route
          path="/tops-blouses"
          element={<Navigate to="/category/tops" replace />}
        />
        <Route path="/co-ord-sets" element={<Navigate to="/category/sets" replace />} />
        <Route
          path="/essentials"
          element={<Navigate to="/category/essentials" replace />}
        />
        <Route path="/customer-care" element={<CustomerCarePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/store-locations" element={<StoreLocationsPage />} />
        <Route path="/faq" element={<FaqPage />} />
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
      </div>
    </Router>
  )
}
