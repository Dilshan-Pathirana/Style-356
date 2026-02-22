export interface Product {
  id: string
  name: string
  price: number
  formattedPrice: string
  category: string
  images: string[]
  sizes: string[]
  description: string
  fabric: string
  care: string
  tags: string[]
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Serenity Wrap Midi Dress',
    price: 12500,
    formattedPrice: 'Rs. 12,500',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
    ],
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14'],
    description:
      'A timeless wrap silhouette crafted from our signature breathable linen blend. The Serenity Midi features a flattering V-neckline, adjustable waist tie, and side pockets for effortless elegance.',
    fabric: '55% Linen, 45% Viscose',
    care: 'Hand wash cold or dry clean. Do not bleach.',
    tags: ['bestseller', 'trending'],
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Ivory Linen Co-ord Set',
    price: 16500,
    formattedPrice: 'Rs. 16,500',
    category: 'Sets',
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    description:
      'The ultimate summer staple. This two-piece set includes a relaxed button-down shirt and matching high-waisted shorts, perfect for tropical getaways or city strolls.',
    fabric: '100% Organic Linen',
    care: 'Machine wash gentle. Line dry in shade.',
    tags: ['new', 'limited'],
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Noir Blazer Dress',
    price: 18500,
    formattedPrice: 'Rs. 18,500',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4e35?w=800&q=80',
    ],
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12'],
    description:
      'Power dressing redefined. Structured shoulders meet a feminine cinched waist in this commanding blazer dress. Finished with gold-tone hardware.',
    fabric: 'Polyester Crepe Blend',
    care: 'Dry clean only.',
    tags: ['trending'],
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Blush Ruched Top',
    price: 4500,
    formattedPrice: 'Rs. 4,500',
    category: 'Tops',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12', 'UK 14'],
    description:
      'Soft, romantic, and versatile. This ruched top features a sweetheart neckline and puffed sleeves, designed to pair perfectly with denim or tailored trousers.',
    fabric: '100% Cotton Poplin',
    care: 'Machine wash cold.',
    tags: ['essentials'],
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Sage Slip Dress',
    price: 8900,
    formattedPrice: 'Rs. 8,900',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80',
    ],
    sizes: ['UK 6', 'UK 8', 'UK 10'],
    description:
      'Minimalism at its finest. A bias-cut slip dress that drapes beautifully over the body, featuring delicate spaghetti straps and a cowl neck.',
    fabric: 'Satin Silk Blend',
    care: 'Hand wash or dry clean.',
    tags: ['bestseller'],
    inStock: true,
  },
  {
    id: 'p6',
    name: 'Onyx Wide Leg Trousers',
    price: 9500,
    formattedPrice: 'Rs. 9,500',
    category: 'Essentials',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4e35?w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16'],
    description:
      'The foundation of a modern wardrobe. High-waisted, wide-leg trousers with front pleats for a sophisticated silhouette.',
    fabric: 'Heavyweight Crepe',
    care: 'Machine wash gentle.',
    tags: ['essentials'],
    inStock: true,
  },
  {
    id: 'p7',
    name: 'Terra Cotta Midi Skirt',
    price: 6800,
    formattedPrice: 'Rs. 6,800',
    category: 'Essentials',
    images: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    description:
      'Earthy tones for the season. A flowy midi skirt with a comfortable elasticated back waist and side slit.',
    fabric: 'Rayon Linen',
    care: 'Hand wash cold.',
    tags: ['new'],
    inStock: true,
  },
  {
    id: 'p8',
    name: 'Azure Summer Dress',
    price: 11200,
    formattedPrice: 'Rs. 11,200',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    ],
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12'],
    description:
      'Bright, bold, and beautiful. This vibrant blue dress features a tiered skirt and tie-up shoulder straps.',
    fabric: '100% Cotton',
    care: 'Machine wash cold.',
    tags: ['trending'],
    inStock: true,
  },
  {
    id: 'p9',
    name: 'Minimalist White Shirt',
    price: 5500,
    formattedPrice: 'Rs. 5,500',
    category: 'Tops',
    images: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12', 'UK 14'],
    description:
      'Crisp, clean, and classic. An oversized white shirt that works as a beach cover-up or office staple.',
    fabric: '100% Cotton Poplin',
    care: 'Machine wash warm.',
    tags: ['essentials', 'bestseller'],
    inStock: true,
  },
  {
    id: 'p10',
    name: 'Golden Hour Maxi',
    price: 14500,
    formattedPrice: 'Rs. 14,500',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    description:
      'Radiate confidence in this floor-sweeping maxi dress with intricate back detailing.',
    fabric: 'Viscose Crepe',
    care: 'Dry clean only.',
    tags: ['limited'],
    inStock: true,
  },
  {
    id: 'p11',
    name: 'Midnight Silk Blouse',
    price: 7200,
    formattedPrice: 'Rs. 7,200',
    category: 'Tops',
    images: [
      'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12', 'UK 14'],
    description:
      'Luxurious texture meets modern design. A high-neck blouse with billowing sleeves.',
    fabric: 'Silk Satin',
    care: 'Hand wash cold.',
    tags: ['new'],
    inStock: true,
  },
  {
    id: 'p12',
    name: 'Urban Chic Jumpsuit',
    price: 13800,
    formattedPrice: 'Rs. 13,800',
    category: 'Sets',
    images: [
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
    ],
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    description:
      'One piece, endless style. A tailored jumpsuit with a belted waist and tapered leg.',
    fabric: 'Linen Blend',
    care: 'Machine wash cold.',
    tags: ['trending'],
    inStock: true,
  },
]
