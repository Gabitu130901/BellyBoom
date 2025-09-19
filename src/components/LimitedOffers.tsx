import React from 'react';
import { Timer, Tag, Zap, ShoppingBag } from 'lucide-react';

const LimitedOffers: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: 'Colecția Zilei',
      subtitle: 'Stocuri Limitate',
      desc: 'Piese selecționate cu reduceri speciale, disponibile doar azi.',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
      discount: '-30%',
      until: 'Expiră în 06:12:47'
    },
    {
      id: 2,
      title: 'Ofertă Fulger',
      subtitle: 'Doar câteva bucăți',
      desc: 'Prinde-ți favoritii la preț special înainte să dispară!',
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=1200',
      discount: '-40%',
      until: 'Expiră în 02:45:10'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 right-24 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm border border-red-400/30 mb-6">
            <Timer className="w-4 h-4 mr-2" />
            Oferte de Moment
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Limitate în Timp & Stoc
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Spune-le „da” acum – se pot epuiza oricând. Poți evidenția „Colecția zilei” sau „Stocuri limitate”.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div key={offer.id} className={`group relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 hover:scale-105 transition-all duration-500 cursor-pointer animate-fadeInUp delay-${index * 100}`}>
              <div className="relative h-80">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-red-500/90 text-white text-xs font-medium rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {offer.discount}
                </div>
                <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 bg-orange-500/90 text-white text-xs font-medium rounded-full">
                  <Timer className="w-3 h-3 mr-1" />
                  {offer.until}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                    <p className="text-pink-300 font-medium">{offer.subtitle}</p>
                  </div>
                  <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                <p className="text-gray-300 mb-4">{offer.desc}</p>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Prinde Oferta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;

