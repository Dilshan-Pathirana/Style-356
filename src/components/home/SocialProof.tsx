import React from 'react'
import { Star, Instagram } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'The quality of the linen is absolutely incredible. Feels so luxurious.',
    author: 'Amara S.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Ordered via WhatsApp and received it the next day. Super smooth process!',
    author: 'Dilini P.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally, a local brand that understands modern, minimal aesthetics.',
    author: 'Sarah K.',
    rating: 5,
  },
]

const instaPosts = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80',
]

export function SocialProof() {
  return (
    <section className="py-20 bg-offwhite border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-charcoal italic mb-4">"{item.text}"</p>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {item.author}
              </span>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2 text-charcoal">
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@kiara.fashion</span>
          </div>
          <h2 className="text-2xl font-serif font-bold">Seen on You</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaPosts.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden bg-gray-200"
            >
              <img
                src={img}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
