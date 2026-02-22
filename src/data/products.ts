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
    "id": "top-1",
    "name": "Silk Camisole",
    "price": 3900,
    "formattedPrice": "Rs. 3,900",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A versatile top that transitions seamlessly from day to night.",
    "fabric": "100% Silk",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "top-2",
    "name": "Linen Button-Down",
    "price": 5500,
    "formattedPrice": "Rs. 5,500",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Crafted from breathable fabric for all-day comfort.",
    "fabric": "Organic Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "top-3",
    "name": "Ribbed Knit Top",
    "price": 12300,
    "formattedPrice": "Rs. 12,300",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4e35?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Features delicate detailing and a flattering silhouette.",
    "fabric": "Cotton Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "top-4",
    "name": "Cotton Poplin Shirt",
    "price": 13300,
    "formattedPrice": "Rs. 13,300",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "An essential piece for your everyday wardrobe.",
    "fabric": "Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "top-5",
    "name": "Wrap Blouse",
    "price": 16800,
    "formattedPrice": "Rs. 16,800",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Elevate your look with this sophisticated and modern design.",
    "fabric": "Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "top-6",
    "name": "Peplum Top",
    "price": 13500,
    "formattedPrice": "Rs. 13,500",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A versatile top that transitions seamlessly from day to night.",
    "fabric": "100% Silk",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "top-7",
    "name": "Off-Shoulder Blouse",
    "price": 11500,
    "formattedPrice": "Rs. 11,500",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-b411f470cb85?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Crafted from breathable fabric for all-day comfort.",
    "fabric": "Organic Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "top-8",
    "name": "Halter Neck Top",
    "price": 16100,
    "formattedPrice": "Rs. 16,100",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80",
      "https://images.unsplash.com/photo-1564584217132-2271fea73ed6?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Features delicate detailing and a flattering silhouette.",
    "fabric": "Cotton Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "new"
    ],
    "inStock": true
  },
  {
    "id": "top-9",
    "name": "Satin Cowl Neck",
    "price": 3600,
    "formattedPrice": "Rs. 3,600",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "An essential piece for your everyday wardrobe.",
    "fabric": "Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "top-10",
    "name": "Chiffon Tunic",
    "price": 14600,
    "formattedPrice": "Rs. 14,600",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Elevate your look with this sophisticated and modern design.",
    "fabric": "Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "top-11",
    "name": "Ruched Crop Top",
    "price": 6300,
    "formattedPrice": "Rs. 6,300",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A versatile top that transitions seamlessly from day to night.",
    "fabric": "100% Silk",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "top-12",
    "name": "Oversized T-Shirt",
    "price": 6000,
    "formattedPrice": "Rs. 6,000",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce1?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Crafted from breathable fabric for all-day comfort.",
    "fabric": "Organic Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "top-13",
    "name": "V-Neck Bodysuit",
    "price": 18600,
    "formattedPrice": "Rs. 18,600",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1564584217132-2271fea73ed6?w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Features delicate detailing and a flattering silhouette.",
    "fabric": "Cotton Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "top-14",
    "name": "Puff Sleeve Blouse",
    "price": 4600,
    "formattedPrice": "Rs. 4,600",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "An essential piece for your everyday wardrobe.",
    "fabric": "Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "top-15",
    "name": "Lace Trim Cami",
    "price": 12700,
    "formattedPrice": "Rs. 12,700",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Elevate your look with this sophisticated and modern design.",
    "fabric": "Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "top-16",
    "name": "Asymmetric Top",
    "price": 3600,
    "formattedPrice": "Rs. 3,600",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A versatile top that transitions seamlessly from day to night.",
    "fabric": "100% Silk",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "top-17",
    "name": "Tie-Front Shirt",
    "price": 12800,
    "formattedPrice": "Rs. 12,800",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1582142339842-085721d5043a?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Crafted from breathable fabric for all-day comfort.",
    "fabric": "Organic Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "top-18",
    "name": "Mock Neck Tank",
    "price": 13100,
    "formattedPrice": "Rs. 13,100",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Features delicate detailing and a flattering silhouette.",
    "fabric": "Cotton Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "top-19",
    "name": "Draped Silk Blouse",
    "price": 13900,
    "formattedPrice": "Rs. 13,900",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "An essential piece for your everyday wardrobe.",
    "fabric": "Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "new"
    ],
    "inStock": true
  },
  {
    "id": "top-20",
    "name": "Smocked Tube Top",
    "price": 3600,
    "formattedPrice": "Rs. 3,600",
    "category": "Tops",
    "images": [
      "https://images.unsplash.com/photo-1550614000-4b95d415029b?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Elevate your look with this sophisticated and modern design.",
    "fabric": "Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "dre-1",
    "name": "Midi Slip Dress",
    "price": 8600,
    "formattedPrice": "Rs. 8,600",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A stunning dress designed to make a statement at any event.",
    "fabric": "Silk Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "dre-2",
    "name": "Wrap Maxi Dress",
    "price": 5400,
    "formattedPrice": "Rs. 5,400",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Flowy and effortless, perfect for warm weather days.",
    "fabric": "Cotton Poplin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "dre-3",
    "name": "Tiered Cotton Dress",
    "price": 9800,
    "formattedPrice": "Rs. 9,800",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Tailored to perfection with a figure-flattering fit.",
    "fabric": "Linen Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "dre-4",
    "name": "Linen Shirt Dress",
    "price": 14900,
    "formattedPrice": "Rs. 14,900",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1550614000-4b95d415029b?w=800&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A timeless silhouette that exudes elegance and grace.",
    "fabric": "Chiffon",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "dre-5",
    "name": "Pleated Evening Gown",
    "price": 18400,
    "formattedPrice": "Rs. 18,400",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1583391733958-156f05a3922c?w=800&q=80",
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Comfortable yet chic, ideal for both casual and formal settings.",
    "fabric": "Ribbed Knit",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "dre-6",
    "name": "Floral Sundress",
    "price": 4700,
    "formattedPrice": "Rs. 4,700",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1580411410803-b1e8098a05f5?w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "A stunning dress designed to make a statement at any event.",
    "fabric": "Silk Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "dre-7",
    "name": "Ribbed Bodycon Dress",
    "price": 10200,
    "formattedPrice": "Rs. 10,200",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Flowy and effortless, perfect for warm weather days.",
    "fabric": "Cotton Poplin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "dre-8",
    "name": "Satin Halter Dress",
    "price": 9200,
    "formattedPrice": "Rs. 9,200",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Tailored to perfection with a figure-flattering fit.",
    "fabric": "Linen Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "dre-9",
    "name": "Velvet Mini Dress",
    "price": 12500,
    "formattedPrice": "Rs. 12,500",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1589465111740-4b01790f5a47?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A timeless silhouette that exudes elegance and grace.",
    "fabric": "Chiffon",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "dre-10",
    "name": "Boho Maxi Dress",
    "price": 11000,
    "formattedPrice": "Rs. 11,000",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Comfortable yet chic, ideal for both casual and formal settings.",
    "fabric": "Ribbed Knit",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "dre-11",
    "name": "A-Line Midi Dress",
    "price": 12500,
    "formattedPrice": "Rs. 12,500",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A stunning dress designed to make a statement at any event.",
    "fabric": "Silk Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "dre-12",
    "name": "One-Shoulder Gown",
    "price": 13300,
    "formattedPrice": "Rs. 13,300",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Flowy and effortless, perfect for warm weather days.",
    "fabric": "Cotton Poplin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "dre-13",
    "name": "Smocked Mini Dress",
    "price": 19500,
    "formattedPrice": "Rs. 19,500",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1564584217132-2271fea73ed6?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Tailored to perfection with a figure-flattering fit.",
    "fabric": "Linen Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "dre-14",
    "name": "Cutout Slip Dress",
    "price": 14500,
    "formattedPrice": "Rs. 14,500",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "A timeless silhouette that exudes elegance and grace.",
    "fabric": "Chiffon",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "dre-15",
    "name": "Ruffled Wrap Dress",
    "price": 6300,
    "formattedPrice": "Rs. 6,300",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Comfortable yet chic, ideal for both casual and formal settings.",
    "fabric": "Ribbed Knit",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "dre-16",
    "name": "Knit Sweater Dress",
    "price": 12800,
    "formattedPrice": "Rs. 12,800",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1516762659827-7711fa580f12?w=800&q=80",
      "https://images.unsplash.com/photo-1564584217132-2271fea73ed6?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A stunning dress designed to make a statement at any event.",
    "fabric": "Silk Satin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "dre-17",
    "name": "Chiffon Maxi Dress",
    "price": 3700,
    "formattedPrice": "Rs. 3,700",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
      "https://images.unsplash.com/photo-1550614000-4b95d415029b?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Flowy and effortless, perfect for warm weather days.",
    "fabric": "Cotton Poplin",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "dre-18",
    "name": "Denim Pinafore Dress",
    "price": 7600,
    "formattedPrice": "Rs. 7,600",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4e35?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Tailored to perfection with a figure-flattering fit.",
    "fabric": "Linen Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "dre-19",
    "name": "Crepe Shift Dress",
    "price": 6600,
    "formattedPrice": "Rs. 6,600",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1564584217132-2271fea73ed6?w=800&q=80",
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A timeless silhouette that exudes elegance and grace.",
    "fabric": "Chiffon",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "dre-20",
    "name": "Sequin Party Dress",
    "price": 9400,
    "formattedPrice": "Rs. 9,400",
    "category": "Dresses",
    "images": [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Comfortable yet chic, ideal for both casual and formal settings.",
    "fabric": "Ribbed Knit",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "set-1",
    "name": "Linen Co-ord Set",
    "price": 18900,
    "formattedPrice": "Rs. 18,900",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A perfectly matched set for an effortlessly put-together look.",
    "fabric": "100% Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "set-2",
    "name": "Silk Pajama Set",
    "price": 4700,
    "formattedPrice": "Rs. 4,700",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Luxurious and comfortable, designed for lounging or stepping out.",
    "fabric": "Silk Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "set-3",
    "name": "Ribbed Knit Lounge Set",
    "price": 18900,
    "formattedPrice": "Rs. 18,900",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-b411f470cb85?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Tailored separates that can be worn together or mixed and matched.",
    "fabric": "Cotton Terry",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "set-4",
    "name": "Blazer and Trouser Set",
    "price": 8600,
    "formattedPrice": "Rs. 8,600",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce1?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A modern take on the classic suit, offering both style and comfort.",
    "fabric": "Poly-Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "trending",
      "new"
    ],
    "inStock": true
  },
  {
    "id": "set-5",
    "name": "Crop Top and Skirt Set",
    "price": 18400,
    "formattedPrice": "Rs. 18,400",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Chic and coordinated, making everyday dressing a breeze.",
    "fabric": "Cashmere Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "set-6",
    "name": "Tweed Suit Set",
    "price": 16700,
    "formattedPrice": "Rs. 16,700",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A perfectly matched set for an effortlessly put-together look.",
    "fabric": "100% Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "set-7",
    "name": "Cotton Terry Track Set",
    "price": 7500,
    "formattedPrice": "Rs. 7,500",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1516762659827-7711fa580f12?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Luxurious and comfortable, designed for lounging or stepping out.",
    "fabric": "Silk Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "trending",
      "new"
    ],
    "inStock": true
  },
  {
    "id": "set-8",
    "name": "Satin Cami and Short Set",
    "price": 4400,
    "formattedPrice": "Rs. 4,400",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80",
      "https://images.unsplash.com/photo-1564584217132-2271fea73ed6?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Tailored separates that can be worn together or mixed and matched.",
    "fabric": "Cotton Terry",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "set-9",
    "name": "Knit Cardigan and Pant Set",
    "price": 16100,
    "formattedPrice": "Rs. 16,100",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A modern take on the classic suit, offering both style and comfort.",
    "fabric": "Poly-Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "set-10",
    "name": "Velvet Lounge Set",
    "price": 13200,
    "formattedPrice": "Rs. 13,200",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Chic and coordinated, making everyday dressing a breeze.",
    "fabric": "Cashmere Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "set-11",
    "name": "Pleated Top and Wide Leg Set",
    "price": 5600,
    "formattedPrice": "Rs. 5,600",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1583391733958-156f05a3922c?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A perfectly matched set for an effortlessly put-together look.",
    "fabric": "100% Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "set-12",
    "name": "Denim Jacket and Skirt Set",
    "price": 7900,
    "formattedPrice": "Rs. 7,900",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Luxurious and comfortable, designed for lounging or stepping out.",
    "fabric": "Silk Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "set-13",
    "name": "Wrap Top and Short Set",
    "price": 9100,
    "formattedPrice": "Rs. 9,100",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Tailored separates that can be worn together or mixed and matched.",
    "fabric": "Cotton Terry",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "set-14",
    "name": "Cashmere Twin Set",
    "price": 4000,
    "formattedPrice": "Rs. 4,000",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "A modern take on the classic suit, offering both style and comfort.",
    "fabric": "Poly-Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "set-15",
    "name": "Lounge Ribbed Set",
    "price": 8800,
    "formattedPrice": "Rs. 8,800",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1589465111740-4b01790f5a47?w=800&q=80",
      "https://images.unsplash.com/photo-1582142339842-085721d5043a?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Chic and coordinated, making everyday dressing a breeze.",
    "fabric": "Cashmere Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "set-16",
    "name": "Tailored Vest and Trouser Set",
    "price": 11900,
    "formattedPrice": "Rs. 11,900",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A perfectly matched set for an effortlessly put-together look.",
    "fabric": "100% Linen",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new"
    ],
    "inStock": true
  },
  {
    "id": "set-17",
    "name": "Boho Top and Maxi Skirt Set",
    "price": 19300,
    "formattedPrice": "Rs. 19,300",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Luxurious and comfortable, designed for lounging or stepping out.",
    "fabric": "Silk Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "set-18",
    "name": "Athleisure Zip Set",
    "price": 4800,
    "formattedPrice": "Rs. 4,800",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Tailored separates that can be worn together or mixed and matched.",
    "fabric": "Cotton Terry",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "set-19",
    "name": "Silk Shirt and Pant Set",
    "price": 8800,
    "formattedPrice": "Rs. 8,800",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "A modern take on the classic suit, offering both style and comfort.",
    "fabric": "Poly-Viscose",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited"
    ],
    "inStock": true
  },
  {
    "id": "set-20",
    "name": "Cotton Waffle Set",
    "price": 13600,
    "formattedPrice": "Rs. 13,600",
    "category": "Sets",
    "images": [
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Chic and coordinated, making everyday dressing a breeze.",
    "fabric": "Cashmere Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "ess-1",
    "name": "Classic White Tee",
    "price": 9800,
    "formattedPrice": "Rs. 9,800",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-b411f470cb85?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "The ultimate wardrobe staple that pairs with everything.",
    "fabric": "100% Cotton",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-2",
    "name": "High-Waist Wide Leg Trousers",
    "price": 16100,
    "formattedPrice": "Rs. 16,100",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=800&q=80",
      "https://images.unsplash.com/photo-1550639525-c97d455bfcce?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Designed for everyday wear with a focus on comfort and durability.",
    "fabric": "Denim",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "limited",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-3",
    "name": "Tailored Blazer",
    "price": 8800,
    "formattedPrice": "Rs. 8,800",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "A classic piece that forms the foundation of any great outfit.",
    "fabric": "Cashmere",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-4",
    "name": "Denim Jacket",
    "price": 18700,
    "formattedPrice": "Rs. 18,700",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Minimalist design meets premium quality in this essential item.",
    "fabric": "Merino Wool",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-5",
    "name": "Ribbed Tank Top",
    "price": 5500,
    "formattedPrice": "Rs. 5,500",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Versatile and timeless, a must-have for every season.",
    "fabric": "Spandex Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-6",
    "name": "Seamless Bodysuit",
    "price": 12100,
    "formattedPrice": "Rs. 12,100",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-b411f470cb85?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "The ultimate wardrobe staple that pairs with everything.",
    "fabric": "100% Cotton",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "bestseller"
    ],
    "inStock": true
  },
  {
    "id": "ess-7",
    "name": "Cashmere Sweater",
    "price": 16900,
    "formattedPrice": "Rs. 16,900",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Designed for everyday wear with a focus on comfort and durability.",
    "fabric": "Denim",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "trending",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-8",
    "name": "Cotton Crewneck",
    "price": 15400,
    "formattedPrice": "Rs. 15,400",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1516762659827-7711fa580f12?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A classic piece that forms the foundation of any great outfit.",
    "fabric": "Cashmere",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "trending"
    ],
    "inStock": true
  },
  {
    "id": "ess-9",
    "name": "Straight Leg Jeans",
    "price": 14500,
    "formattedPrice": "Rs. 14,500",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Minimalist design meets premium quality in this essential item.",
    "fabric": "Merino Wool",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-10",
    "name": "Black Leggings",
    "price": 9300,
    "formattedPrice": "Rs. 9,300",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
      "https://images.unsplash.com/photo-1582142339842-085721d5043a?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Versatile and timeless, a must-have for every season.",
    "fabric": "Spandex Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-11",
    "name": "Oversized Button-Up",
    "price": 13000,
    "formattedPrice": "Rs. 13,000",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "The ultimate wardrobe staple that pairs with everything.",
    "fabric": "100% Cotton",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-12",
    "name": "Trench Coat",
    "price": 13300,
    "formattedPrice": "Rs. 13,300",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "Designed for everyday wear with a focus on comfort and durability.",
    "fabric": "Denim",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-13",
    "name": "Slip Skirt",
    "price": 11700,
    "formattedPrice": "Rs. 11,700",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80",
      "https://images.unsplash.com/photo-1582142339842-085721d5043a?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A classic piece that forms the foundation of any great outfit.",
    "fabric": "Cashmere",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-14",
    "name": "Turtleneck Knit",
    "price": 9200,
    "formattedPrice": "Rs. 9,200",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1516762659827-7711fa580f12?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14"
    ],
    "description": "Minimalist design meets premium quality in this essential item.",
    "fabric": "Merino Wool",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "essentials",
      "new"
    ],
    "inStock": true
  },
  {
    "id": "ess-15",
    "name": "V-Neck Cardigan",
    "price": 13200,
    "formattedPrice": "Rs. 13,200",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1589465111740-4b01790f5a47?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Versatile and timeless, a must-have for every season.",
    "fabric": "Spandex Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-16",
    "name": "Tailored Shorts",
    "price": 6500,
    "formattedPrice": "Rs. 6,500",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12"
    ],
    "description": "The ultimate wardrobe staple that pairs with everything.",
    "fabric": "100% Cotton",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "bestseller",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-17",
    "name": "Basic Long Sleeve",
    "price": 12200,
    "formattedPrice": "Rs. 12,200",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-b411f470cb85?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Designed for everyday wear with a focus on comfort and durability.",
    "fabric": "Denim",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-18",
    "name": "Fleece Hoodie",
    "price": 18400,
    "formattedPrice": "Rs. 18,400",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ],
    "sizes": [
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "A classic piece that forms the foundation of any great outfit.",
    "fabric": "Cashmere",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "limited",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-19",
    "name": "Relaxed Joggers",
    "price": 8900,
    "formattedPrice": "Rs. 8,900",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
    ],
    "sizes": [
      "UK 8",
      "UK 10",
      "UK 12",
      "UK 14",
      "UK 16"
    ],
    "description": "Minimalist design meets premium quality in this essential item.",
    "fabric": "Merino Wool",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "limited",
      "essentials"
    ],
    "inStock": true
  },
  {
    "id": "ess-20",
    "name": "Puffer Vest",
    "price": 5500,
    "formattedPrice": "Rs. 5,500",
    "category": "Essentials",
    "images": [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
    ],
    "sizes": [
      "UK 6",
      "UK 8",
      "UK 10"
    ],
    "description": "Versatile and timeless, a must-have for every season.",
    "fabric": "Spandex Blend",
    "care": "Machine wash cold. Line dry.",
    "tags": [
      "new",
      "essentials"
    ],
    "inStock": true
  }
];
