import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Zap, TrendingUp, Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Toate', icon: '✨' },
    { id: 'dresses', label: 'Rochii', icon: '👗' },
    { id: 'tops', label: 'Topuri', icon: '👚' },
    { id: 'bottoms', label: 'Pantaloni/Fuste', icon: '👖' },
    { id: 'activewear', label: 'Activewear', icon: '🏃‍♀️' },
    { id: 'sleepwear', label: 'Pijamale', icon: '🌙' }
  ];

  const products = [
    {
      id: 1,
      name: 'Aurora Wrap Dress',
      category: 'dresses',
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
      features: ['AI-Fitted', 'Stretch Technology', 'Nursing Friendly']
    },
    {
      id: 2,
      name: 'Cosmic Comfort Leggings',
      category: 'bottoms',
      price: 89,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 189,
      aiMatch: 92,
      trending: false,
      newArrival: true,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Charcoal'],
      features: ['Over-Belly Support', '4-Way Stretch', 'Moisture-Wicking']
    },
    {
      id: 3,
      name: 'Stellar Nursing Top',
      category: 'tops',
      price: 79,
      originalPrice: 99,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviews: 156,
      aiMatch: 88,
      trending: true,
      newArrival: false,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Blush', 'Sage'],
      features: ['Easy Access', 'Soft Modal', 'Flattering Cut']
    },
    {
      id: 4,
      name: 'Galaxy Yoga Set',
      category: 'activewear',
      price: 129,
      originalPrice: 169,
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 298,
      aiMatch: 94,
      trending: true,
      newArrival: true,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Purple', 'Teal', 'Rose Gold'],
      features: ['Breathable Fabric', 'Bump Support', 'Sweat-Resistant']
    },
    {
      id: 5,
      name: 'Dream Cloud Pajamas',
      category: 'sleepwear',
      price: 99,
      originalPrice: 129,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 167,
      aiMatch: 91,
      trending: false,
      newArrival: false,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Lavender', 'Mint', 'Pearl'],
      features: ['Bamboo Blend', 'Temperature Regulating', 'Nursing Friendly']
    },
    {
      id: 6,
      name: 'Celestial Midi Dress',
      category: 'dresses',
      price: 169,
      originalPrice: 219,
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 201,
      aiMatch: 96,
      trending: true,
      newArrival: true,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Navy', 'Burgundy', 'Forest'],
      features: ['Occasion Wear', 'Adjustable Fit', 'Post-Pregnancy Friendly']
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-20 bg-pink-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-charcoal/70 text-sm font-medium backdrop-blur-sm border border-purple-400/30 mb-6">
            <TrendingUp className="w-4 h-4 mr-2 text-charcoal/70" />
            Colecții Recomandate
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">Create Special Pentru Tine</h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recomandări asistate de AI, în funcție de preferințe, schimbările corpului și stadiul sarcinii.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400'
                  : 'bg-white/5 text-charcoal/70 border-white/10 hover:bg-white/10 hover:border-pink-400/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white/70 backdrop-blur-md border border-pink-200 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer animate-fadeInUp delay-${index * 100}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.newArrival && (
                    <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      Nou
                    </span>
                  )}
                  {product.trending && (
                    <span className="px-3 py-1 bg-pink-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      În trend
                    </span>
                  )}
                </div>

                {/* AI Match Score */}
                <div className="absolute top-4 right-4 bg-pink-500/90 backdrop-blur-sm rounded-2xl px-3 py-2">
                  <div className="flex items-center text-white text-sm font-medium">
                    <Zap className="w-4 h-4 mr-1 text-yellow-300" />
                    {product.aiMatch}% Potrivire
                  </div>
                </div>

                {/* Quick Actions */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 group/btn">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 group/btn">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 group/btn">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-600 text-sm ml-2">
                    {product.rating} ({product.reviews} review-uri)
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-lg border border-pink-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-pink-600">{product.price} RON</span>
                    <span className="text-slate-500 line-through">{product.originalPrice} RON</span>
                  </div>
                  <div className="text-green-400 text-sm font-medium">
                    Economisești {product.originalPrice - product.price} RON
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/cart">
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover/cart:scale-110 transition-transform" />
                  Adaugă în Coș
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-400/30 transition-all duration-300">
            Încarcă Mai Multe Produse
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;