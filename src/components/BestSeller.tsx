import React from 'react';
import { Crown, Star, ShoppingBag, TrendingUp } from 'lucide-react';

const BestSeller: React.FC = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'Aurora Wrap Dress',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 149,
      rating: 4.9,
      sold: 1240,
    },
    {
      id: 2,
      name: 'Galaxy Yoga Set',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 129,
      rating: 4.9,
      sold: 980,
    },
    {
      id: 3,
      name: 'Stellar Nursing Top',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 79,
      rating: 4.8,
      sold: 860,
    },
  ];

  return (
    <section id="best-seller" className="py-20 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-24 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-yellow-500/20 rounded-full text-charcoal/70 text-sm font-medium backdrop-blur-sm border border-yellow-400/30 mb-6">
            <Crown className="w-4 h-4 mr-2 text-charcoal/70" />
            Best Seller
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Cele Mai Căutate Piese
          </h2>

          <p className="text-xl text-charcoal/70  max-w-3xl mx-auto">
            Alese de mii de mămici – verificate, iubite și recomandate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bestSellers.map((item, index) => (
            <div key={item.id} className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer animate-fadeInUp delay-${index * 100}`}>
              <div className="relative h-80 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {item.sold} vândute
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-pink-400">{item.price} RON</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-pink-600 hover:from-yellow-600 hover:to-pink-700 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Adaugă în Coș
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

