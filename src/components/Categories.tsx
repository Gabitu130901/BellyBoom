import React, { useState } from 'react';
import { ArrowRight, Star, Heart, ShoppingBag, Camera, Sparkles } from 'lucide-react';

const Categories: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      title: 'Ieșiri Stradale',
      subtitle: 'Eleganță Urbană',
      description: 'Colecția perfectă pentru mamicile moderne care vor să strălucească în oraș. Piese versatile care se adaptează stilului tău dinamic, de la întâlniri de afaceri la plimbări relaxante prin parc.',
      features: ['Materiale premium', 'Design contemporan', 'Confort maxim', 'Stil profesional'],
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-500 to-rose-500',
      icon: '🏙️',
      products: 45,
      rating: 4.9,
      modelSpace: 'Spațiu dedicat pentru shooting-ul modelelor noastre în mediu urban elegant'
    },
    {
      id: 2,
      title: 'Pentru Stat în Curte',
      subtitle: 'Relaxare Naturală',
      description: 'Haine confortabile și respirabile pentru momentele de relaxare acasă sau în grădină. Materiale naturale care îți permit să te bucuri de natură în timp ce îți hrănești burtica cu vitamina D.',
      features: ['Materiale naturale', 'Respirabilitate maximă', 'Ușor de întreținut', 'Protecție UV'],
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-emerald-500',
      icon: '🌿',
      products: 32,
      rating: 4.8,
      modelSpace: 'Spațiu pentru fotografii în grădină și terase, cu decor natural și lumină caldă'
    },
    {
      id: 3,
      title: 'Pentru Sală',
      subtitle: 'Fitness & Wellness',
      description: 'Echipament tehnic pentru mamicile active care vor să își mențină forma fizică. Tehnologii avansate de management al umidității și suport optim pentru burtica în creștere.',
      features: ['Tehnologie moisture-wicking', 'Suport pentru burtică', 'Flexibilitate maximă', 'Durabilitate'],
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-500 to-red-500',
      icon: '💪',
      products: 28,
      rating: 4.9,
      modelSpace: 'Studio de fitness modern cu echipamente profesionale pentru shooting dinamic'
    },
    {
      id: 4,
      title: 'Sport',
      subtitle: 'Performance Activă',
      description: 'Colecția sport de înaltă performanță pentru mamicile care practică sporturi diverse. De la yoga prenatal la înot, fiecare piesă este testată pentru confort și siguranță maximă.',
      features: ['Performanță atletică', 'Siguranță testată', 'Design ergonomic', 'Versatilitate sport'],
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-cyan-500',
      icon: '🏃‍♀️',
      products: 38,
      rating: 4.8,
      modelSpace: 'Facilități sportive complete: piscină, sală de yoga, terenuri pentru shooting activ'
    },
    {
      id: 5,
      title: 'Modă',
      subtitle: 'Haute Couture Maternitate',
      description: 'Piese statement pentru mamicile cu stil care vor să facă o impresie deosebită. Colaborări cu designeri renumiți și materiale de lux pentru ocazii speciale și evenimente importante.',
      features: ['Design de lux', 'Materiale premium', 'Croială perfectă', 'Exclusivitate'],
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-500 to-violet-500',
      icon: '✨',
      products: 52,
      rating: 4.9,
      modelSpace: 'Studio de modă profesional cu fundal alb, iluminat profesional și accesorii de lux'
    },
    {
      id: 6,
      title: 'Rochițe',
      subtitle: 'Feminitate Pură',
      description: 'Rochii elegante care celebrează frumusețea maternității. De la casual chic la formal elegant, fiecare rochie este creată să îți pună în valoare silueta și să îți ofere încredere.',
      features: ['Siluetă flatantă', 'Versatilitate ocazii', 'Confort prelungit', 'Design feminin'],
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-500 to-purple-500',
      icon: '👗',
      products: 41,
      rating: 4.9,
      modelSpace: 'Decor romantic cu flori, lumină soft și fundal pastel pentru shooting feminin'
    },
    {
      id: 7,
      title: 'De Dormit',
      subtitle: 'Comfort Nocturn',
      description: 'Pijamale și lenjerie de noapte din materiale hipoalergenice pentru un somn odihnitor. Designuri care se adaptează schimbărilor corpului și facilitează alăptarea.',
      features: ['Materiale hipoalergenice', 'Confort nocturn', 'Ușurință alăptare', 'Termoregulare'],
      image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-indigo-500 to-blue-500',
      icon: '🌙',
      products: 25,
      rating: 4.8,
      modelSpace: 'Dormitor de lux cu lenjerie premium, lumină ambientală și atmosferă relaxantă'
    }
  ];

  return (
    <section className="py-20 bg-pink-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium border border-pink-200 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Categorii Exclusive
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Pentru Fiecare Moment
            <br />
            Din Viața Ta
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descoperă colecțiile noastre specializate, create pentru toate aspectele vieții tale de mamică modernă. 
            De la relaxare acasă la evenimente speciale, avem piesa perfectă pentru tine.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-white/70 backdrop-blur-md border border-pink-200 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer animate-fadeInUp delay-${index * 100}`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Category Icon */}
                <div className="absolute top-6 left-6">
                  <div className="text-6xl mb-2">{category.icon}</div>
                  <div className={`inline-flex items-center px-3 py-1 bg-white/80 rounded-full text-slate-800 text-sm font-medium`}>
                    {category.products} produse
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl p-3">
                  <div className="flex items-center text-slate-800">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{category.rating}</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className={`absolute bottom-6 right-6 flex gap-3 transition-all duration-300 ${
                  hoveredCategory === category.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-pink-100 transition-colors group/btn">
                    <Heart className="w-5 h-5 text-slate-800" />
                  </button>
                  <button className="p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-pink-100 transition-colors group/btn">
                    <ShoppingBag className="w-5 h-5 text-slate-800" />
                  </button>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-pink-600 font-medium">{category.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <div className={`w-2 h-2 rounded-full bg-pink-400 mr-2`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Model Space Description */}
                <div className="bg-white/70 rounded-2xl p-4 mb-6 border border-pink-200">
                  <div className="flex items-center mb-2">
                    <Camera className="w-5 h-5 text-pink-600 mr-2" />
                    <span className="text-pink-600 font-medium text-sm">Spațiu Shooting Modele</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {category.modelSpace}
                  </p>
                </div>

                {/* Action Button */}
                <button className={`w-full bg-pink-500 hover:shadow-md hover:bg-pink-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/btn`}>
                  Explorează Colecția
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Nu găsești ceea ce cauți? Explorează întreaga noastră colecție!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Vezi Toate Produsele
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;