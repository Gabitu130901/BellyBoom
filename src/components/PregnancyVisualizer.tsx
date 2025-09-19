import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight,  Star, Sparkles, Baby,  Crown, } from 'lucide-react';
import { } from '../data/products';

const PregnancyVisualizer: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState(20);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredOutfit, setHoveredOutfit] = useState<number | null>(null);

  // Function to scroll to specific product categories
  const scrollToCategory = (category: string) => {
    // Map categories to specific product sections
    const categoryMap: { [key: string]: string } = {
      'early': 'products-general',
      'casual': 'products-general', 
      'work': 'products-general',
      'dress': 'products-general',
      'formal': 'products-general',
      'elegant': 'products-general',
      'comfort': 'products-general',
      'nursing': 'products-general',
      'collections': 'pregnancy-journey'
    };
    
    const elementId = categoryMap[category] || 'products-general';
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to week-specific products
  const scrollToWeekProducts = (week: number) => {
    // Map weeks to months for Calendar Mămici
    const weekToMonthMap: { [key: number]: number } = {
      8: 2,   // Week 8 = Month 2
      16: 4,  // Week 16 = Month 4
      24: 6,  // Week 24 = Month 6
      32: 8,  // Week 32 = Month 8
      40: 9   // Week 40 = Month 9
    };
    
    const month = weekToMonthMap[week];
    if (month) {
      // Scroll to Calendar Mămici and set the month
      const calendarElement = document.getElementById('calendar-mamici');
      if (calendarElement) {
        calendarElement.scrollIntoView({ behavior: 'smooth' });
        
        // Nu mai seta automat luna - lasă utilizatorul să aleagă
        // setTimeout(() => {
        //   localStorage.setItem('bellyboom_month', String(month));
        //   // Trigger a custom event to update the calendar
        //   window.dispatchEvent(new CustomEvent('setCalendarMonth', { detail: month }));
        // }, 500);
      }
    } else {
      // Fallback to general products
      const element = document.getElementById('products-general');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  const pregnancyStages = [
    {
      week: 8,
      title: "Primele Vexi",
      subtitle: "Încep schimbările magice ✨",
      bellySize: "w-16 h-16",
      outfits: ["Blugi skinny", "Topuri fitted", "Rochii A-line"],
      mood: "Entuziasmată",
      tip: "Începe să-ți creezi garderoba de tranziție",
      color: "from-emerald-200 to-emerald-400",
      bgImage: "https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      week: 16,
      title: "Burtica Dragută",
      subtitle: "Prima rotunjire adorabilă 🤱",
      bellySize: "w-24 h-24",
      outfits: ["Jeans cu bandă", "Rochii wrap", "Cardigane lungi"],
      mood: "Înflorită",
      tip: "Investește în sutiene de maternitate confortabile",
      color: "from-coral-200 to-coral-400",
      bgImage: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      week: 24,
      title: "Mama Glowing",
      subtitle: "Radiezi frumusețe naturală ⭐",
      bellySize: "w-32 h-32",
      outfits: ["Rochii maxi", "Leggings comfy", "Blazere oversize"],
      mood: "Radiantă",
      tip: "Momentul perfect pentru sesiuni foto de maternitate",
      color: "from-amber-200 to-amber-400",
      bgImage: "https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      week: 32,
      title: "Empress Mode",
      subtitle: "Puterea feminității absolute 👑",
      bellySize: "w-40 h-40",
      outfits: ["Tunici elegante", "Pantaloni palazzo", "Rochii de seară"],
      mood: "Puternică",
      tip: "Alege comfort fără compromisuri la stil",
      color: "from-purple-200 to-purple-400",
      bgImage: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      week: 38,
      title: "Ready to Pop",
      subtitle: "Aproape să întâlnești minunea 👶",
      bellySize: "w-48 h-48",
      outfits: ["Rochii de spital", "Pijamale premium", "Halate moi"],
      mood: "Pregătită",
      tip: "Pregătește geanta pentru spital cu stil",
      color: "from-rose-200 to-rose-400",
      bgImage: "https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const currentStage = pregnancyStages.find(stage => stage.week === activeWeek) || pregnancyStages[2];

  // Auto-progression through weeks
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveWeek(prev => {
        const currentIndex = pregnancyStages.findIndex(stage => stage.week === prev);
        const nextIndex = (currentIndex + 1) % pregnancyStages.length;
        return pregnancyStages[nextIndex].week;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const milestones = [
    { week: 8, icon: "🌱", label: "Primul ecograf" },
    { week: 16, icon: "💗", label: "Se aude inima" },
    { week: 24, icon: "👶", label: "Viabilitate" },
    { week: 32, icon: "🧠", label: "Dezvoltare rapidă" },
    { week: 38, icon: "🎉", label: "Gata de naștere" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentStage.color} opacity-5 transition-all duration-1000`}></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-current opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-current opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Baby className="w-5 h-5 mr-2" />
            Călătoria Ta în 9 Luni
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-charcoal">
            Transformarea
            <span className="block bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">
              Magică
            </span>
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Descoperă cum stilul tău evoluează odată cu corpul tău. 
            Fiecare săptămână aduce noi provocări și noi oportunități de a străluci! ✨
          </p>
        </div>

        {/* Main Visualizer */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Interactive Timeline */}
            <div className="space-y-8">
              {/* Week Selector */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      const currentIndex = pregnancyStages.findIndex(stage => stage.week === activeWeek);
                      if (currentIndex > 0) setActiveWeek(pregnancyStages[currentIndex - 1].week);
                    }}
                    className="p-3 bg-white/80 rounded-full border border-sand hover:shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-charcoal" />
                  </button>
                  
                  <div className="text-center">
                    <div className="text-6xl font-bold text-charcoal mb-2">{activeWeek}</div>
                    <div className="text-charcoal/70">săptămâni</div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      const currentIndex = pregnancyStages.findIndex(stage => stage.week === activeWeek);
                      if (currentIndex < pregnancyStages.length - 1) setActiveWeek(pregnancyStages[currentIndex + 1].week);
                    }}
                    className="p-3 bg-white/80 rounded-full border border-sand hover:shadow-lg transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-charcoal" />
                  </button>
                </div>

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    isAutoPlaying 
                      ? 'bg-coral text-white' 
                      : 'bg-white border border-sand text-charcoal hover:shadow-lg'
                  }`}
                >
                  {isAutoPlaying ? 'Oprește Auto' : 'Pornește Auto'}
                </button>
              </div>

              {/* Stage Info */}
              <div className="bg-white/80 backdrop-blur rounded-3xl p-8 border border-sand shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-charcoal mb-2">{currentStage.title}</h3>
                  <p className="text-lg text-charcoal/70">{currentStage.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral mb-1">Mood</div>
                    <div className="text-charcoal/70">{currentStage.mood}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald mb-1">Outfits</div>
                    <div className="text-charcoal/70">{currentStage.outfits.length} stiluri</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-coral/5 to-emerald/5 rounded-2xl p-4 border border-coral/10">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-charcoal mb-1">Pro Tip</div>
                      <div className="text-charcoal/70 text-sm">{currentStage.tip}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outfit Recommendations */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-charcoal flex items-center">
                  <Crown className="w-5 h-5 text-coral mr-2" />
                  Recomandări pentru săptămâna {activeWeek}
                </h4>
                
                <div className="grid grid-cols-1 gap-3">
                  {currentStage.outfits.map((outfit, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredOutfit(index)}
                      onMouseLeave={() => setHoveredOutfit(null)}
                      onClick={() => scrollToWeekProducts(activeWeek)}
                      className={`flex items-center justify-between p-4 bg-white/60 rounded-2xl border border-sand transition-all duration-300 cursor-pointer ${
                        hoveredOutfit === index ? 'shadow-lg scale-105 bg-white/90' : ''
                      }`}
                    >
                      <span className="font-medium text-charcoal">{outfit}</span>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-coral" />
                        <span className="text-sm text-charcoal/70">Vezi produse</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Visual Representation */}
            <div className="relative">
              {/* Background Image */}
              <div className="relative">
                <img
                  src={currentStage.bgImage}
                  alt={`Săptămâna ${activeWeek}`}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl transition-all duration-1000"
                />
                
                {/* Overlay with Belly Visualization */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/90 backdrop-blur rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-charcoal">Săptămâna {activeWeek}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-coral fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Belly Size Indicator */}
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-charcoal/70 text-sm">Mărimea burții:</span>
                        <div className="flex items-center space-x-2">
                          <div className={`${currentStage.bellySize} bg-gradient-to-br ${currentStage.color} rounded-full transition-all duration-1000 shadow-lg`}></div>
                          <span className="text-charcoal font-medium">{currentStage.title}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => scrollToWeekProducts(activeWeek)}
                        className="w-full bg-gradient-to-r from-coral to-emerald text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                      >
                        Explorează Stilurile pentru Săptămâna {activeWeek}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald via-coral to-purple-400 rounded-full transform -translate-y-1/2"></div>
              
              {/* Milestone Points */}
              <div className="relative flex justify-between items-center">
                {milestones.map((milestone, ) => (
                  <button
                    key={milestone.week}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveWeek(milestone.week);
                    }}
                    className={`group relative transition-all duration-300 ${
                      activeWeek === milestone.week 
                        ? 'transform scale-125' 
                        : 'hover:scale-110'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                      activeWeek === milestone.week
                        ? 'bg-coral text-white shadow-xl'
                        : 'bg-white border-4 border-sand hover:border-coral shadow-lg'
                    }`}>
                      {milestone.icon}
                    </div>
                    
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center min-w-max opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur rounded-xl px-3 py-2 border border-sand shadow-lg">
                        <div className="font-semibold text-charcoal text-sm">Săptămâna {milestone.week}</div>
                        <div className="text-charcoal/70 text-xs">{milestone.label}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-8 border border-coral/20">
              <h3 className="text-3xl font-bold text-charcoal mb-4">
                Pregătită să îți începi transformarea? ✨
              </h3>
              <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
                Descoperă colecțiile noastre organizate pe săptămâni de sarcină și găsește stilul perfect pentru fiecare etapă.
              </p>
              <button 
                onClick={() => scrollToCategory('collections')}
                className="bg-gradient-to-r from-coral to-emerald text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Explorează Colecțiile Mele
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PregnancyVisualizer;
