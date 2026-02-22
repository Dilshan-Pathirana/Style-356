export interface Category {
  id: string
  name: string
  image: string
  link: string
}

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Tops',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    link: '/category/tops',
  },
  {
    id: 'c2',
    name: 'Dresses',
    image:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    link: '/category/dresses',
  },
  {
    id: 'c3',
    name: 'Sets',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    link: '/category/sets',
  },
  {
    id: 'c4',
    name: 'Essentials',
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
    link: '/category/essentials',
  },
]
