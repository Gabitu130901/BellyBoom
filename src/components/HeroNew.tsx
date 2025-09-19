import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Star, Sparkles, Baby, Play, Shield, Truck, Award } from 'lucide-react';

const HeroNew: React.FC = () => {
  const [showBabyAnimation, setShowBabyAnimation] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonials = [
    {
      text: "BellyBoom a făcut sarcina mea atât de frumoasă! Fiecare hainuță este perfectă! 💕",
      author: "Maria, 28 ani",
      week: "Săptămâna 24",
      stars: 5
    },
    {
      text: "Calitatea este extraordinară și mă simt atât de elegantă în fiecare zi! ✨",
      author: "Ana, 32 ani", 
      week: "Săptămâna 31",
      stars: 5
    },
    {
      text: "Nu mai pot trăi fără colecțiile BellyBoom! Sunt obsedată! 🤱",
      author: "Elena, 26 ani",
      week: "Săptămâna 18",
      stars: 5
    }
  ];

  const features = [
    { icon: Truck, text: "Livrare 24h", color: "text-emerald" },
    { icon: Shield, text: "Garanție 30 zile", color: "text-coral" },
    { icon: Award, text: "Calitate Premium", color: "text-charcoal" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStartJourney = () => {
    setShowBabyAnimation(true);
    
    // Hide animation after 2 seconds and scroll to best sellers
    setTimeout(() => {
      setShowBabyAnimation(false);
      const bestSellerSection = document.getElementById('best-seller');
      if (bestSellerSection) {
        bestSellerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-sand overflow-hidden">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-coral/5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-emerald/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-sand/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-coral/5 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Baby Animation Overlay */}
      {showBabyAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4 animate-spin">👶</div>
            <h3 className="text-3xl font-bold text-coral mb-2">Bun venit în călătoria ta! 🎉</h3>
            <p className="text-charcoal/70">Te îndreptăm către produsele noastre cele mai iubite...</p>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Trending Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-full border border-coral/20">
              <Sparkles className="w-4 h-4 text-coral mr-2" />
              <span className="text-coral font-medium text-sm">Trending #1 în România</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-6xl lg:text-8xl font-bold text-charcoal leading-tight mb-6">
                Mama
                <span className="block bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">
                  Stylish
                </span>
              </h1>
              <p className="text-2xl text-charcoal/80 leading-relaxed">
                Transformă fiecare zi din sarcină într-o 
                <span className="font-semibold text-coral"> experiență magică</span> cu 
                colecțiile noastre exclusive! ✨
              </p>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center px-4 py-2 bg-white/80 rounded-full border border-sand shadow-sm">
                    <Icon className={`w-4 h-4 ${feature.color} mr-2`} />
                    <span className="text-charcoal text-sm font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <button 
                onClick={handleStartJourney}
                className="group bg-gradient-to-r from-coral to-emerald hover:from-coral/90 hover:to-emerald/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center"
              >
                <Baby className="mr-3 h-6 w-6" />
                Începe Călătoria Magică
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="text-charcoal/60 text-sm flex items-center">
                <Heart className="w-4 h-4 text-coral mr-2" />
                Peste 50.000 de mamici fericite ne-au ales deja!
              </p>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sand">
              <div className="text-center">
                <div className="text-3xl font-bold text-coral mb-1">2,156</div>
                <div className="text-charcoal/60 text-sm">Comenzi azi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald mb-1">4.9★</div>
                <div className="text-charcoal/60 text-sm">Rating mediu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-charcoal mb-1">1,2M</div>
                <div className="text-charcoal/60 text-sm">Urmăritori</div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Content */}
          <div className="space-y-8">
            
            {/* Video/Image Hero */}
            <div className="relative group">
              {!isVideoPlaying ? (
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mamă fericită în haine BellyBoom"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Play Button Overlay */}
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl group-hover:bg-black/30 transition-colors"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-coral ml-1" />
                    </div>
                  </button>
                  
                  {/* Video Label */}
                  <div className="absolute bottom-4 left-4 bg-white/90 rounded-2xl px-4 py-2 backdrop-blur-sm">
                    <span className="text-charcoal font-semibold text-sm">▶ Povestea BellyBoom</span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-96 bg-charcoal rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Baby className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                    <p className="text-lg">Video momentan indisponibil</p>
                    <button 
                      onClick={() => setIsVideoPlaying(false)}
                      className="mt-2 px-4 py-2 bg-coral rounded-lg text-sm"
                    >
                      Înapoi la imagine
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Live Testimonials Carousel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-sand shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal flex items-center">
                  <Heart className="w-5 h-5 text-coral mr-2" />
                  Ce spun mamicile
                </h3>
                <div className="flex space-x-1">
                  {testimonials.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full ${currentTestimonial === index ? 'bg-coral' : 'bg-sand'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="transition-all duration-500">
                <div className="flex items-center mb-3">
                  {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-coral fill-current" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-3 italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-charcoal">{testimonials[currentTestimonial].author}</span>
                  <span className="text-coral">{testimonials[currentTestimonial].week}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-coral/10 to-coral/5 border border-coral/20 rounded-2xl p-4 text-left hover:shadow-lg transition-all group">
                <div className="text-2xl mb-2">🎁</div>
                <div className="font-semibold text-charcoal group-hover:text-coral transition-colors">Oferte Speciale</div>
                <div className="text-charcoal/60 text-sm">Până la -50%</div>
              </button>
              
              <button className="bg-gradient-to-r from-emerald/10 to-emerald/5 border border-emerald/20 rounded-2xl p-4 text-left hover:shadow-lg transition-all group">
                <div className="text-2xl mb-2">💎</div>
                <div className="font-semibold text-charcoal group-hover:text-emerald transition-colors">Colecții Premium</div>
                <div className="text-charcoal/60 text-sm">Exclusiv online</div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-sand p-4 z-40 lg:hidden">
          <button 
            onClick={handleStartJourney}
            className="w-full bg-gradient-to-r from-coral to-emerald text-white py-3 rounded-2xl font-semibold flex items-center justify-center"
          >
            <Baby className="mr-2 h-5 w-5" />
            Începe Călătoria
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
