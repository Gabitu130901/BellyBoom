import React, { useState } from 'react';
import { ArrowRight, Star, Heart, Calendar, Sparkles, Baby, Crown, Moon } from 'lucide-react';
import CategoryPage from './CategoryPage';

const PregnancyJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);

  const journeyStages = [
    {
      id: 1,
      stage: 'Early Glow',
      weeks: '1-12 săptămâni',
      title: 'Începutul Călătoriei',
      subtitle: 'Primele Schimbări',
      icon: '🌱',
      color: 'from-emerald-400 via-emerald-500 to-teal-600',
      categories: [
        {
          id: 1,
          name: 'Ieșiri Stradale',
          icon: '🏙️',
          description: 'Eleganță urbană pentru primele ieșiri cu vești bune',
          products: 24,
          gradient: 'from-coral/80 to-coral',
          image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 2,
          name: 'Pentru Stat în Curte',
          icon: '🌿',
          description: 'Confort natural pentru momente de relaxare',
          products: 18,
          gradient: 'from-emerald/80 to-emerald',
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 2,
      stage: 'Blooming Beauty',
      weeks: '13-26 săptămâni',
      title: 'Înflorirea Frumuseții',
      subtitle: 'Momentul Strălucirii',
      icon: '🌸',
      color: 'from-coral-400 via-coral-500 to-rose-600',
      categories: [
        {
          id: 3,
          name: 'Pentru Sală',
          icon: '💪',
          description: 'Activewear pentru menținerea formei fizice',
          products: 31,
          gradient: 'from-charcoal/80 to-charcoal',
          image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 4,
          name: 'Sport',
          icon: '🏃‍♀️',
          description: 'Echipament profesional pentru antrenamente',
          products: 27,
          gradient: 'from-emerald/80 to-emerald',
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 3,
      stage: 'Radiant Empress',
      weeks: '27-40 săptămâni',
      title: 'Împărăteasa Radiantă',
      subtitle: 'Apogeul Feminității',
      icon: '👑',
      color: 'from-sand-400 via-sand-500 to-amber-600',
      categories: [
        {
          id: 5,
          name: 'Modă',
          icon: '✨',
          description: 'Haute couture pentru ocazii speciale',
          products: 42,
          gradient: 'from-sand/80 to-sand',
          image: 'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 6,
          name: 'Rochițe',
          icon: '👗',
          description: 'Eleganță feminină pentru evenimente importante',
          products: 35,
          gradient: 'from-coral/80 to-coral',
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  // If a category is selected, show the category page
  if (selectedCategory) {
    return (
      <CategoryPage 
        category={selectedCategory} 
        onBack={() => setSelectedCategory(null)} 
      />
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-coral rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-sand rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Baby className="w-5 h-5 mr-2" />
            Pentru Fiecare Moment Din Viața Ta
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-charcoal">
            Călătoria Ta, <span className="bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">Stilul Tău</span>
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Descoperă colecțiile noastre specializate, create pentru toate aspectele vieții tale 
            de mamă modernă. De la relaxare acasă la evenimente speciale, avem piesa 
            perfectă pentru fiecare moment.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald via-coral to-sand transform -translate-y-1/2 rounded-full"></div>
          
          {/* Stage Indicators */}
          <div className="relative flex justify-between items-center">
            {journeyStages.map((stage, index) => (
              <div key={stage.id} className="relative group">
                <button
                  onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                  className={`relative z-10 w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center text-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl ${
                    activeStage === stage.id 
                      ? 'border-coral shadow-2xl scale-110' 
                      : 'border-sand shadow-lg hover:border-coral/50'
                  }`}
                >
                  <span className="transform transition-transform duration-300 group-hover:scale-125">
                    {stage.icon}
                  </span>
                </button>
                
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                  <h3 className="font-bold text-charcoal text-lg">{stage.stage}</h3>
                  <p className="text-charcoal/60 text-sm">{stage.weeks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Categories */}
        {activeStage && (
          <div className="animate-fadeIn">
            {journeyStages
              .filter(stage => stage.id === activeStage)
              .map(stage => (
                <div key={stage.id} className="space-y-8">
                  <div className="text-center">
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent mb-2`}>
                      {stage.title}
                    </h3>
                    <p className="text-xl text-charcoal/70">{stage.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {stage.categories.map((category, index) => (
                      <div
                        key={category.id}
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        className={`group relative overflow-hidden rounded-3xl border border-sand transition-all duration-700 hover:shadow-2xl hover:scale-105 cursor-pointer ${
                          hoveredCategory === category.id ? 'z-10' : ''
                        }`}
                        style={{
                          transform: hoveredCategory === category.id ? 'translateY(-8px) rotateX(5deg)' : 'none',
                          perspective: '1000px'
                        }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img 
                            src={category.image} 
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-95`}></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 h-80 flex flex-col justify-between text-white">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-4xl">{category.icon}</span>
                              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                                {category.products} produse
                              </span>
                            </div>
                            
                            <h4 className="text-3xl font-bold mb-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                              {category.name}
                            </h4>
                            
                            <p className="text-white/90 leading-relaxed group-hover:transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                              {category.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                              <span className="ml-2 text-sm">4.9</span>
                            </div>
                            
                            <button 
                              onClick={() => setSelectedCategory(category)}
                              className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300 group-hover:transform group-hover:scale-105"
                            >
                              <span>Explorează</span>
                              <ArrowRight className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex space-x-2">
                            <Heart className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
                            <Sparkles className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Default State - Hexagonal Grid */}
        {!activeStage && (
          <div className="animate-fadeIn">
            <h3 className="text-3xl font-bold text-center text-charcoal mb-12">
              Selectează o etapă din călătoria ta pentru a explora colecțiile
            </h3>
            
            {/* Hexagonal Overview */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-coral to-emerald rounded-full flex items-center justify-center shadow-lg">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                
                {/* Surrounding Circles */}
                {journeyStages.map((stage, index) => {
                  const angle = (index * 120) - 90; // 120 degrees apart, starting from top
                  const radius = 140;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(stage.id)}
                      className="absolute w-20 h-20 rounded-full bg-white border-4 border-sand hover:border-coral flex items-center justify-center text-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl group"
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 40px)`
                      }}
                    >
                      <span className="transform transition-transform duration-300 group-hover:scale-125">
                        {stage.icon}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Fiecare etapă a sarcinii aduce noi provocări și bucurii. Colecțiile noastre sunt 
                create special pentru a te acompania în această călătorie unică.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PregnancyJourney;
