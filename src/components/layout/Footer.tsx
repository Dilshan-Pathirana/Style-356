import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">STYLE365</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Redefining Sri Lankan luxury fashion with timeless elegance and
              contemporary design. Crafted for the modern woman.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-gold">
              <Link to="/shop" className="hover:text-white transition-colors">
                Shop
              </Link>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/new-arrivals"
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/dresses"
                  className="hover:text-white transition-colors"
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  to="/tops-blouses"
                  className="hover:text-white transition-colors"
                >
                  Tops & Blouses
                </Link>
              </li>
              <li>
                <Link
                  to="/co-ord-sets"
                  className="hover:text-white transition-colors"
                >
                  Co-ord Sets
                </Link>
              </li>
              <li>
                <Link
                  to="/essentials"
                  className="hover:text-white transition-colors"
                >
                  Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-gold">
              <Link to="/customer-care" className="hover:text-white transition-colors">
                Customer Care
              </Link>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-returns"
                  className="hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/size-guide"
                  className="hover:text-white transition-colors"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/store-locations"
                  className="hover:text-white transition-colors"
                >
                  Store Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-gold">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-gold" />
                <span>
                  Level 2, Colombo City Centre,
                  <br />
                  Colombo 02, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-gold" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-gold" />
                <span>hello@STYLE365.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} STYLE365 Fashion. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
