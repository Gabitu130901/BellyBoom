import React, { useState } from 'react';
import { 
  Crown, Truck, Heart, Users, Gift, Star, 
  Shield, Zap, Sparkles, Award, Package, 
  Clock, Smile, TrendingUp, Baby
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const FeaturesNew: React.FC = () => {
  const [showBabyAnimation, setShowBabyAnimation] = useState(false);
  const { openAuth, user } = useShop();

  const handleStartShopping = () => {
    setShowBabyAnimation(true);
    setTimeout(() => {
      setShowBabyAnimation(false);
      // Scroll to BestSeller section
      const element = document.getElementById('best-seller');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
  };

  const handleJoinCommunity = () => {
    if (user) {
      // If logged in, scroll to community blog
      const element = document.getElementById('community-blog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not logged in, open auth modal
      openAuth();
    }
  };
  const features = [
    {
      icon: Crown,
      title: 'Calitate Premium',
      description: 'Materiale de cea mai înaltă calitate, selectate special pentru confortul mamicilor. Testate și aprobate!',
      color: 'from-coral to-coral/80',
      delay: 'delay-100',
      highlight: 'CALITATE'
    },
    {
      icon: Truck,
      title: 'Livrare Rapidă 24h',
      description: 'Livrare în maxim 24h în București și 48h în toată țara. Pentru că timpul tău e prețios!',
      color: 'from-emerald-500 to-emerald-600',
      delay: 'delay-200',
      highlight: 'RAPID'
    },
    {
      icon: Sparkles,
      title: 'Modă Trendy',
      description: 'Designuri moderne și stylish care te fac să te simți frumoasă în fiecare zi a sarcinii!',
      color: 'from-purple-500 to-pink-500',
      delay: 'delay-300',
      highlight: 'TRENDY'
    },
    {
      icon: Gift,
      title: 'Reduceri VIP',
      description: 'Reduceri exclusive pentru membrii comunității, oferte speciale și surprize lunare doar pentru tine!',
      color: 'from-rose-500 to-red-500',
      delay: 'delay-400',
      highlight: 'REDUCERI'
    },
    {
      icon: Users,
      title: 'Comunitate Fericită',
      description: 'Alătură-te unei comunități de mamici care se sprijină mutual și împărtășesc experiența frumoasă!',
      color: 'from-blue-500 to-cyan-500',
      delay: 'delay-500',
      highlight: 'COMUNITATE'
    },
    {
      icon: Star,
      title: 'Style Personal',
      description: 'Recomandări de styling personalizate pentru fiecare etapă a sarcinii. Fii stylish în fiecare zi!',
      color: 'from-yellow-500 to-orange-500',
      delay: 'delay-600',
      highlight: 'STYLING'
    },
    {
      icon: Shield,
      title: 'Garanție Satisfacție',
      description: 'Garanție 100% satisfacție sau îți returnăm banii. Cumpără fără griji și cu încredere!',
      color: 'from-teal-500 to-emerald-500',
      delay: 'delay-700',
      highlight: 'GARANȚIE'
    },
    {
      icon: Heart,
      title: 'Mamici Fericite',
      description: 'Peste 2.800+ mamici fericite ne-au ales pentru că înțelegem nevoile tale unice și speciale!',
      color: 'from-pink-500 to-rose-500',
      delay: 'delay-800',
      highlight: 'FERICIRE'
    },
    {
      icon: Package,
      title: 'Ambalaj Premium',
      description: 'Fiecare comandă vine într-un ambalaj frumos și eco-friendly. O experiență de unboxing magică!',
      color: 'from-indigo-500 to-purple-500',
      delay: 'delay-900',
      highlight: 'EXPERIENȚĂ'
    },
    {
      icon: Award,
      title: 'Brand de Încredere',
      description: 'Brandul #1 pentru haine de maternitate în România. Încrederea mamicilor e cea mai mare recompensă!',
      color: 'from-amber-500 to-yellow-500',
      delay: 'delay-1000',
      highlight: 'ÎNCREDERE'
    }
  ];

  const stats = [
    {
      number: '2,847+',
      label: 'Mamici Fericite',
      icon: Smile,
      color: 'text-coral'
    },
    {
      number: '4.9/5',
      label: 'Rating Mediu',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      number: '24h',
      label: 'Livrare Rapidă',
      icon: Clock,
      color: 'text-emerald-500'
    },
    {
      number: '98%',
      label: 'Recomandă BellyBoom',
      icon: TrendingUp,
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-coral rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Crown className="w-5 h-5 mr-2" />
            De Ce Aleg Mamicile BellyBoom
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-charcoal">
            Experiența
            <span className="block bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">
              BellyBoom
            </span>
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Nu e doar despre haine - e despre o <strong>experiență completă</strong> gândită special pentru tine! 
            Calitate premium, livrare rapidă, style modern și o comunitate care te susține. ✨
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 border border-sand hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-charcoal mb-1">{stat.number}</div>
                <div className="text-sm text-charcoal/70 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-md border border-sand rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl cursor-pointer animate-fadeInUp ${feature.delay}`}
              >
                {/* Highlight Badge */}
                <div className="absolute -top-2 left-4 bg-gradient-to-r from-coral to-emerald text-white text-xs font-bold px-3 py-1 rounded-full">
                  {feature.highlight}
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-coral transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-coral" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-8 border border-coral/20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl font-bold text-charcoal mb-4 italic">
              "BellyBoom mi-a transformat complet experiența sarcinii! 
              Calitatea e excepțională, livrarea super rapidă, iar designurile sunt atât de frumoase încât primesc complimente peste tot!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Alexandra M."
                className="w-12 h-12 rounded-full object-cover border-2 border-coral/30"
              />
              <div className="text-left">
                <div className="font-semibold text-charcoal">Alexandra M.</div>
                <div className="text-sm text-charcoal/70">Mamă fericită, săptămâna 32</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-charcoal">
              Pregătită să devii următoarea mamică fericită? 🌟
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <button 
                onClick={handleStartShopping}
                className="group bg-gradient-to-r from-coral to-emerald text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center relative overflow-hidden"
              >
                <Heart className="w-5 h-5 mr-2" />
                Începe Shopping-ul
                <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
                
                {/* Baby Animation */}
                {showBabyAnimation && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-400 flex items-center justify-center">
                    <Baby className="w-8 h-8 text-white animate-bounce" />
                    <span className="ml-2 text-white font-bold">Bun venit, micuțo! 👶</span>
                  </div>
                )}
              </button>
              
              <button 
                onClick={handleJoinCommunity}
                className="bg-white text-charcoal border-2 border-coral px-8 py-4 rounded-2xl font-bold hover:bg-coral hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Alătură-te Comunității
              </button>
            </div>
            
            <p className="text-charcoal/60 text-sm">
              🎁 <strong>Ofertă specială:</strong> 15% reducere la prima comandă + livrare gratuită!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesNew;
