import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Clock, Truck, Package, Star, Zap } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  location: string;
  product: string;
  image: string;
  price: number;
  timeAgo: string;
  status: 'processing' | 'shipped' | 'delivered';
  rating?: number;
}

const LiveOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulate live orders
  const mockOrders: Order[] = [
    {
      id: '1',
      customerName: 'Alexandra M.',
      location: 'București',
      product: 'Aurora Wrap Dress',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 149,
      timeAgo: 'acum 2 minute',
      status: 'processing'
    },
    {
      id: '2',
      customerName: 'Maria K.',
      location: 'Cluj-Napoca',
      product: 'Galaxy Yoga Set',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 129,
      timeAgo: 'acum 5 minute',
      status: 'shipped'
    },
    {
      id: '3',
      customerName: 'Elena R.',
      location: 'Timișoara',
      product: 'Celestial Midi Dress',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 169,
      timeAgo: 'acum 8 minute',
      status: 'delivered',
      rating: 5
    },
    {
      id: '4',
      customerName: 'Ioana P.',
      location: 'Iași',
      product: 'Dream Cloud Pajamas',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 99,
      timeAgo: 'acum 12 minute',
      status: 'processing'
    },
    {
      id: '5',
      customerName: 'Andreea S.',
      location: 'Constanța',
      product: 'Stellar Nursing Top',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 79,
      timeAgo: 'acum 15 minute',
      status: 'shipped'
    },
    {
      id: '6',
      customerName: 'Cristina L.',
      location: 'Brașov',
      product: 'Cosmic Comfort Leggings',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 89,
      timeAgo: 'acum 18 minute',
      status: 'delivered',
      rating: 5
    }
  ];

  useEffect(() => {
    setOrders(mockOrders);
    
    // Simulate new orders coming in
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockOrders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="w-4 h-4 text-yellow-400" />;
      case 'shipped':
        return <Truck className="w-4 h-4 text-blue-400" />;
      case 'delivered':
        return <Zap className="w-4 h-4 text-green-400" />;
      default:
        return <Package className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Se procesează';
      case 'shipped':
        return 'În livrare';
      case 'delivered':
        return 'Livrată';
      default:
        return 'Necunoscut';
    }
  };

  const getStatusCoor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-400/30';
      case 'shipped':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-400/30';
      case 'delivered':
        return 'from-green-500/20 to-emerald-500/20 border-green-400/30';
      default:
        return 'from-gray-500/20 to-gray-500/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 bg-pink-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium border border-pink-200 mb-6">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Comenzi în Timp Real
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Mamicile Comandă Chiar Acum
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Urmărește în timp real comenzile care se plasează pe BellyBoom. 
            Alătură-te comunității de mămici care au ales calitatea și inovația.
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">247</div>
            <div className="text-gray-400 text-sm">Comenzi Astăzi</div>
            <div className="w-full bg-green-500/20 rounded-full h-2 mt-3">
              <div className="bg-green-400 h-2 rounded-full animate-pulse" style={{width: '78%'}}></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1,234</div>
            <div className="text-gray-400 text-sm">Această Săptămână</div>
            <div className="w-full bg-blue-500/20 rounded-full h-2 mt-3">
              <div className="bg-blue-400 h-2 rounded-full animate-pulse" style={{width: '65%'}}></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-gray-400 text-sm">Satisfacție Client</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24h</div>
            <div className="text-gray-400 text-sm">Livrare Rapidă</div>
            <div className="flex justify-center mt-2">
              <Truck className="w-6 h-6 text-pink-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Live Orders Feed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg border border-pink-200 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                Feed Live Comenzi
              </h3>
              <div className="text-pink-600 text-sm font-medium">
                Actualizare automată
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {orders.map((order, index) => (
                <div
                  key={order.id}
                  className={`bg-white/80 backdrop-blur-md border border-pink-100 rounded-2xl p-6 transition-all durata-500 ${
                    index === currentIndex ? 'scale-105 shadow-2xl' : 'scale-100'
                  } ${index === currentIndex ? 'animate-pulse' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-white/20"
                      />
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-white font-semibold">{order.customerName}</h4>
                          <div className="flex items-center text-gray-300 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {order.location}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 font-medium mb-1">{order.product}</p>
                        
                        <div className="flex items-center space-x-4">
                          <span className="text-pink-400 font-bold">{order.price} RON</span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {order.timeAgo}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`flex items-center justify-end mb-2 px-3 py-1 rounded-full bg-gradient-to-r ${getStatusCoor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="text-slate-800 text-sm font-medium ml-2">
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      
                      {order.rating && (
                        <div className="flex items-center justify-end">
                          {[...Array(order.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {index === currentIndex && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-400 font-medium">✨ Comandă nouă!</span>
                        <span className="text-gray-400">Se actualizează în timp real</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">15</div>
                  <div className="text-gray-400 text-sm">Comenzi/Oră</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">4.9</div>
                  <div className="text-gray-400 text-sm">Rating Mediu</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">156</div>
                  <div className="text-gray-400 text-sm">RON Valoare Medie</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Alătură-te mamicilor care au ales BellyBoom!</p>
          <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Începe Shopping-ul
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveOrders;