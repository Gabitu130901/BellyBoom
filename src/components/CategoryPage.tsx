import React, { useState, useMemo } from 'react';
import { ArrowLeft, SlidersHorizontal, Grid, List, Star, Heart, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  sales: number;
  category: string;
  isNew?: boolean;
  isDiscounted?: boolean;
  description: string;
}

interface CategoryPageProps {
  category: {
    id: number;
    name: string;
    icon: string;
    description: string;
    products: number;
    gradient: string;
    image: string;
  };
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack }) => {
  const [sortBy, setSortBy] = useState<'sales' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('sales');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const { favorites, toggleFavorite, addToCart } = useShop();

  // Mock data pentru produse - în realitate ar veni de la API
  const mockProducts: Product[] = [
    {
      id: 1,
      name: 'Aurora Wrap Dress Elegant',
      price: 149,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 234,
      sales: 1250,
      category: category.name.toLowerCase(),
      isNew: false,
      isDiscounted: true,
      description: 'Rochie elegantă perfectă pentru evenimente speciale, cu design wrap flatant.'
    },
    {
      id: 2,
      name: 'Cosmic Comfort Activewear Set',
      price: 89,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 189,
      sales: 890,
      category: category.name.toLowerCase(),
      isNew: true,
      isDiscounted: false,
      description: 'Set confortabil pentru antrenamente, cu tehnologie de absorbție a umidității.'
    },
    {
      id: 3,
      name: 'Stellar Business Blazer',
      price: 199,
      originalPrice: 249,
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviews: 156,
      sales: 670,
      category: category.name.toLowerCase(),
      isNew: false,
      isDiscounted: true,
      description: 'Blazer profesional pentru întâlniri de afaceri, croială perfectă pentru gravide.'
    },
    {
      id: 4,
      name: 'Garden Party Maxi Dress',
      price: 169,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 298,
      sales: 1100,
      category: category.name.toLowerCase(),
      isNew: true,
      isDiscounted: false,
      description: 'Rochie maxi perfectă pentru evenimente în aer liber, material respirabil.'
    },
    {
      id: 5,
      name: 'Premium Yoga Leggings',
      price: 79,
      originalPrice: 99,
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 445,
      sales: 1890,
      category: category.name.toLowerCase(),
      isNew: false,
      isDiscounted: true,
      description: 'Colanti premium pentru yoga și pilates, suport abdominal optim.'
    },
    {
      id: 6,
      name: 'Evening Gala Gown',
      price: 299,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 89,
      sales: 234,
      category: category.name.toLowerCase(),
      isNew: true,
      isDiscounted: false,
      description: 'Rochie de gală pentru evenimente formale, design de lux cu atenție la detalii.'
    }
  ];

  const sortedProducts = useMemo(() => {
    let filtered = mockProducts.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'sales':
        return filtered.sort((a, b) => b.sales - a.sales);
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default:
        return filtered;
    }
  }, [mockProducts, sortBy, priceRange]);

  const getSortLabel = (sort: string) => {
    switch (sort) {
      case 'sales': return 'Cele mai vândute';
      case 'price-asc': return 'Preț crescător';
      case 'price-desc': return 'Preț descrescător';
      case 'rating': return 'Rating cel mai mare';
      case 'newest': return 'Cele mai noi';
      default: return 'Sortare';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-sand">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sand">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 px-4 py-2 bg-sand hover:bg-sand/70 rounded-2xl transition-colors text-charcoal"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Înapoi</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold text-charcoal">{category.name}</h1>
                  <p className="text-charcoal/70">{sortedProducts.length} produse disponibile</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-sand rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-coral shadow-sm' : 'text-charcoal/60'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-colors ${
                    viewMode === 'list' ? 'bg-white text-coral shadow-sm' : 'text-charcoal/60'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-white border border-sand rounded-2xl px-6 py-3 pr-10 text-charcoal focus:outline-none focus:border-coral transition-colors cursor-pointer"
                >
                  <option value="sales">Cele mai vândute</option>
                  <option value="price-asc">Preț crescător</option>
                  <option value="price-desc">Preț descrescător</option>
                  <option value="rating">Rating cel mai mare</option>
                  <option value="newest">Cele mai noi</option>
                </select>
                <SlidersHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/60 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-sand">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                <SlidersHorizontal className="w-5 h-5 mr-2 text-coral" />
                Filtre
              </h3>
              
              {/* Price Range */}
              <div className="space-y-4">
                <h4 className="font-semibold text-charcoal">Interval Preț</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-coral"
                  />
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{priceRange[0]} RON</span>
                    <span>{priceRange[1]} RON</span>
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-charcoal">Filtre Rapide</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-charcoal">
                    <input type="checkbox" className="rounded border-sand accent-coral" />
                    <span>Produse noi</span>
                  </label>
                  <label className="flex items-center space-x-2 text-charcoal">
                    <input type="checkbox" className="rounded border-sand accent-coral" />
                    <span>La reducere</span>
                  </label>
                  <label className="flex items-center space-x-2 text-charcoal">
                    <input type="checkbox" className="rounded border-sand accent-coral" />
                    <span>Rating 4.5+</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-charcoal/70">
                Sortare: <span className="font-semibold text-charcoal">{getSortLabel(sortBy)}</span>
              </p>
              <p className="text-charcoal/70">{sortedProducts.length} rezultate</p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="group bg-white/90 backdrop-blur rounded-3xl overflow-hidden border border-sand hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        {product.isNew && (
                          <span className="px-3 py-1 bg-emerald text-white text-xs font-semibold rounded-full">
                            NOU
                          </span>
                        )}
                        {product.isDiscounted && (
                          <span className="px-3 py-1 bg-coral text-white text-xs font-semibold rounded-full">
                            REDUCERE
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${favorites.has(product.id) ? 'fill-coral text-coral' : 'text-charcoal/60'}`} />
                      </button>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-coral transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">{product.description}</p>

                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-coral text-coral' : 'text-charcoal/20'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-charcoal/70">({product.reviews})</span>
                        <div className="flex items-center text-sm text-charcoal/70">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {product.sales} vândute
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-charcoal">{product.price} RON</span>
                          {product.originalPrice && (
                            <span className="text-lg text-charcoal/50 line-through">{product.originalPrice} RON</span>
                          )}
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          className="flex items-center space-x-2 px-4 py-2 bg-coral hover:bg-coral/90 text-white rounded-2xl font-semibold transition-colors"
                        >
                          <ShoppingBag className="w-5 h-5" />
                          <span>Adaugă</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="flex items-center bg-white/90 backdrop-blur rounded-3xl border border-sand p-6 hover:shadow-lg transition-all duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-2xl mr-6"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-charcoal mb-2">{product.name}</h3>
                          <p className="text-charcoal/70 mb-3">{product.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-coral text-coral' : 'text-charcoal/20'}`} />
                              ))}
                              <span className="ml-2 text-sm text-charcoal/70">({product.reviews})</span>
                            </div>
                            <div className="flex items-center text-sm text-charcoal/70">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              {product.sales} vândute
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-charcoal">{product.price} RON</span>
                            {product.originalPrice && (
                              <span className="text-lg text-charcoal/50 line-through">{product.originalPrice} RON</span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => toggleFavorite(product.id)}
                              className="p-2 bg-sand hover:bg-sand/70 rounded-full transition-colors"
                            >
                              <Heart className={`w-5 h-5 ${favorites.has(product.id) ? 'fill-coral text-coral' : 'text-charcoal/60'}`} />
                            </button>
                            <button
                              onClick={() => addToCart(product)}
                              className="flex items-center space-x-2 px-4 py-2 bg-coral hover:bg-coral/90 text-white rounded-2xl font-semibold transition-colors"
                            >
                              <ShoppingBag className="w-5 h-5" />
                              <span>Adaugă</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
