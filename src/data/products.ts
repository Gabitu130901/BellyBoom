export type ProductStyle = 'sport' | 'casual' | 'iesit' | 'elegant';

export interface ProductItem {
  id: number;
  name: string;
  category: 'dresses' | 'tops' | 'bottoms' | 'activewear' | 'sleepwear';
  style: ProductStyle;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  aiMatch: number;
  trending: boolean;
  newArrival: boolean;
  sizes: string[];
  colors: string[];
  features: string[];
  monthsRecommended: number[]; // 1-9 (luni de sarcină)
  isFlashSale?: boolean;
  isDiscounted?: boolean;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: 'Aurora Wrap Dress',
    category: 'dresses',
    style: 'elegant',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviews: 234,
    aiMatch: 95,
    trending: true,
    newArrival: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Blue', 'Black', 'White'],
    features: ['AI-Fitted', 'Stretch Technology', 'Nursing Friendly'],
    monthsRecommended: [3,4,5,6,7,8],
    isDiscounted: true
  },
  {
    id: 2,
    name: 'Cosmic Comfort Leggings',
    category: 'bottoms',
    style: 'sport',
    price: 79,
    originalPrice: 120,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviews: 189,
    aiMatch: 92,
    trending: false,
    newArrival: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    features: ['Over-Belly Support', '4-Way Stretch', 'Moisture-Wicking'],
    monthsRecommended: [1,2,3,4,5,6,7,8,9],
    isFlashSale: true
  },
  {
    id: 3,
    name: 'Stellar Nursing Top',
    category: 'tops',
    style: 'casual',
    price: 69,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviews: 156,
    aiMatch: 88,
    trending: true,
    newArrival: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Blush', 'Sage'],
    features: ['Easy Access', 'Soft Modal', 'Flattering Cut'],
    monthsRecommended: [2,3,4,5,6,7,8,9],
    isDiscounted: true
  },
  {
    id: 4,
    name: 'Galaxy Yoga Set',
    category: 'activewear',
    style: 'sport',
    price: 109,
    originalPrice: 169,
    image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviews: 298,
    aiMatch: 94,
    trending: true,
    newArrival: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Purple', 'Teal', 'Rose Gold'],
    features: ['Breathable Fabric', 'Bump Support', 'Sweat-Resistant'],
    monthsRecommended: [1,2,3,4,5,6],
    isFlashSale: true
  },
  {
    id: 5,
    name: 'Dream Cloud Pajamas',
    category: 'sleepwear',
    style: 'casual',
    price: 89,
    originalPrice: 129,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviews: 167,
    aiMatch: 91,
    trending: false,
    newArrival: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Lavender', 'Mint', 'Pearl'],
    features: ['Bamboo Blend', 'Temperature Regulating', 'Nursing Friendly'],
    monthsRecommended: [1,2,3,4,5,6,7,8,9],
    isDiscounted: true
  },
  {
    id: 6,
    name: 'Celestial Midi Dress',
    category: 'dresses',
    style: 'iesit',
    price: 159,
    originalPrice: 219,
    image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviews: 201,
    aiMatch: 96,
    trending: true,
    newArrival: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Burgundy', 'Forest'],
    features: ['Occasion Wear', 'Adjustable Fit', 'Post-Pregnancy Friendly'],
    monthsRecommended: [4,5,6,7,8,9]
  }
];

export const filterByMonth = (products: ProductItem[], month?: number) => {
  if (!month) return products;
  return products.filter(p => p.monthsRecommended.includes(month));
};


