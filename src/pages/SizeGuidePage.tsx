import React from 'react'
import { motion } from 'framer-motion'

const sizeRows = [
  { uk: 'UK 6', bust: '31-32"', waist: '24-25"', hips: '34-35"' },
  { uk: 'UK 8', bust: '33-34"', waist: '26-27"', hips: '36-37"' },
  { uk: 'UK 10', bust: '35-36"', waist: '28-29"', hips: '38-39"' },
  { uk: 'UK 12', bust: '37-38"', waist: '30-31"', hips: '40-41"' },
  { uk: 'UK 14', bust: '39-40"', waist: '32-33"', hips: '42-43"' },
  { uk: 'UK 16', bust: '41-42"', waist: '34-35"', hips: '44-45"' },
]

export function SizeGuidePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Size Guide</h1>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-charcoal">
              <tr>
                <th className="text-left px-4 py-3">Size</th>
                <th className="text-left px-4 py-3">Bust</th>
                <th className="text-left px-4 py-3">Waist</th>
                <th className="text-left px-4 py-3">Hips</th>
              </tr>
            </thead>
            <tbody>
              {sizeRows.map((row) => (
                <tr key={row.uk} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{row.uk}</td>
                  <td className="px-4 py-3">{row.bust}</td>
                  <td className="px-4 py-3">{row.waist}</td>
                  <td className="px-4 py-3">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.main>
  )
}
