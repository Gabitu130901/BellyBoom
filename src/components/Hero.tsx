import React from 'react';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-ivory via-white to-sand overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-sand/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float delay-${i * 100}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-charcoal leading-tight">
            Călătoria Ta,
            <br />
            Stilul Tău
          </h1>
          
          <p className="text-xl text-charcoal/70 mb-8 max-w-2xl">
            Descoperă frumusețea sarcinii cu haine care îți respectă forma în schimbare. 
            Fiecare piesă este creată pentru confortul și eleganța ta, în fiecare moment special.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-gradient-to-r from-coral to-emerald hover:from-coral/90 hover:to-emerald/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-coral/25 flex items-center justify-center">
              Începe Călătoria
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">9 Luni</div>
              <div className="text-charcoal/70 text-sm">De Aventură Stylish</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald mb-2">24/7</div>
              <div className="text-charcoal/70 text-sm">Suport Pentru Mamici</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">∞</div>
              <div className="text-charcoal/70 text-sm flex items-center justify-center">
                <Star className="w-4 h-4 text-coral mr-1" />
                Dragoste & Grație
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 relative">
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-coral/10 to-emerald/10 rounded-3xl p-8 backdrop-blur-lg border border-coral/20 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beautiful pregnant woman in elegant maternity wear"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-pulse">
                <div className="text-sm font-semibold text-charcoal mb-1">Mămica Fericită! 🤱</div>
                <div className="flex items-center text-coral">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-coral/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                <div className="text-sm font-semibold text-white mb-1">Săptămâna 28 ✨</div>
                <div className="text-white/90 text-xs">Burtică Frumoasă</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-64 h-64 bg-gradient-to-br from-coral/20 to-emerald/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-sand/40 to-coral/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;