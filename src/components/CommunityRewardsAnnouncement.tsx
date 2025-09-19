import React, { useState } from 'react';
import { 
  Megaphone, Star, Gift, Camera, Heart, Users, 
  Plane, MapPin, Calendar, Crown, Trophy, 
  Sparkles, X, Tag, Share2, Instagram, Facebook,
  Zap, Award, PartyPopper, Camera as CameraIcon, Eye
} from 'lucide-react';

const CommunityRewardsAnnouncement: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showDuration, setShowDuration] = useState(10); // 10 seconds countdown

  // Auto-close after 10 seconds
  React.useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setShowDuration(prev => {
          if (prev <= 1) {
            setIsOpen(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const rewards = [
    {
      icon: Gift,
      title: 'Reduceri Exclusive',
      description: 'Până la 30% reducere pentru membrii activi',
      points: '500+ puncte',
      color: 'from-coral to-rose-500',
      requirements: 'Minim 10 postări + 500 RON cumpărături'
    },
    {
      icon: Crown,
      title: 'Produse Gratuite',
      description: 'Primești piese gratuite din noile colecții',
      points: '1,500+ puncte',
      color: 'from-emerald-500 to-teal-500',
      requirements: 'Minim 25 postări + 1,000 RON cumpărături'
    },
    {
      icon: Users,
      title: 'Întâlniri Exclusive',
      description: 'Meetup-uri mamici organizate de BellyBoom',
      points: '2,500+ puncte',
      color: 'from-purple-500 to-pink-500',
      requirements: 'Minim 50 postări + 1,500 RON cumpărături + 10 tag-uri'
    },
    {
      icon: Plane,
      title: 'Vacanțe cu Mamici',
      description: 'Weekend-uri relaxante plătite de noi!',
      points: '5,000+ puncte',
      color: 'from-blue-500 to-cyan-500',
      requirements: 'Minim 100 postări + 3,000 RON cumpărături + 50 tag-uri + TikTok'
    },
    {
      icon: MapPin,
      title: 'Ieșiri în Oraș',
      description: 'SPA, restaurante, evenimente speciale',
      points: '3,000+ puncte',
      color: 'from-yellow-500 to-orange-500',
      requirements: 'Minim 75 postări + 2,000 RON cumpărături + 25 tag-uri'
    },
    {
      icon: Trophy,
      title: 'Statut VIP',
      description: 'Acces prioritar la totul + consultanță styling',
      points: '4,000+ puncte',
      color: 'from-indigo-500 to-purple-500',
      requirements: 'Minim 100 postări + 2,500 RON cumpărături + 30 tag-uri'
    }
  ];

  const actions = [
    {
      action: 'Instagram Feed (Max 2/zi)',
      points: '+15 puncte',
      icon: Instagram,
      color: 'text-pink-500',
      limit: 'Max 2 postări/zi'
    },
    {
      action: 'Instagram Story (Max 5/zi)',
      points: '+8 puncte',
      icon: CameraIcon,
      color: 'text-purple-500',
      limit: 'Max 5 story-uri/zi'
    },
    {
      action: 'Tag 3 prietene (Max 3/zi)',
      points: '+10 puncte',
      icon: Tag,
      color: 'text-blue-500',
      limit: 'Max 3 tag-uri/zi'
    },
    {
      action: '#BellyBoom Hashtag',
      points: '+5 puncte',
      icon: Tag,
      color: 'text-indigo-500',
      limit: 'Fără limită'
    },
    {
      action: 'TikTok cu #BellyBoom',
      points: '+25 puncte',
      icon: Share2,
      color: 'text-black',
      limit: 'Fără limită'
    },
    {
      action: 'Post pe Blog Comunitate',
      points: '+20 puncte',
      icon: Users,
      color: 'text-emerald-500',
      limit: 'Max 1 post/zi'
    },
    {
      action: 'Review cu poze',
      points: '+12 puncte',
      icon: Star,
      color: 'text-yellow-500',
      limit: 'Max 2 review-uri/zi'
    },
    {
      action: 'Invită o prietenă',
      points: '+50 puncte',
      icon: Heart,
      color: 'text-coral',
      limit: 'Fără limită'
    },
    {
      action: 'Cumpărătură 500+ RON',
      points: '+100 puncte',
      icon: Gift,
      color: 'text-coral',
      limit: 'Fără limită'
    },
    {
      action: 'Cumpărătură 1000+ RON',
      points: '+250 puncte',
      icon: Crown,
      color: 'text-purple-500',
      limit: 'Fără limită'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-4 border-gradient-to-r from-coral to-emerald">
        
        {/* Animated Header */}
        <div className="bg-gradient-to-r from-coral via-emerald-500 to-blue-500 text-white p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-coral/20 to-emerald/20 animate-pulse"></div>
          
          <div className="absolute top-4 right-4 flex items-center space-x-3 z-10">
            <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">
              {showDuration}s
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-4">
              <Megaphone className="w-12 h-12 mr-4 animate-bounce" />
              <PartyPopper className="w-10 h-10 ml-4 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fadeIn">
              🚨 ANUNȚ MAJOR! 🚨
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              PROGRAMUL BELLYBOOM REWARDS
            </h2>
            
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur">
              <p className="text-lg md:text-xl font-semibold">
                🎉 <strong>TRANSFORMĂ-TE ÎN BRAND AMBASSADOR!</strong> 🎉
                <br />
                <span className="text-yellow-300">Postează, Tag-uiește, Primește CADOURI INCREDIBILE!</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          
          {/* Main Message */}
          <div className="text-center mb-8 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-6 border-2 border-dashed border-coral">
            <Sparkles className="w-16 h-16 text-coral mx-auto mb-4 animate-spin" />
            
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              🔥 REVOLUȚIONĂM MODA DE MATERNITATE! 🔥
            </h3>
            
            <div className="text-lg text-charcoal/80 space-y-2 mb-6">
              <p><strong>✨ VREI SĂ FII PARTEA DIN CEVA MAGIC?</strong></p>
              <p>Fiecare post, story, tag și share te aduce mai aproape de <strong>RECOMPENSE INCREDIBILE!</strong></p>
              <p className="text-xl font-bold text-coral">
                De la reduceri și produse gratuite la VACANȚE cu alte mamici! 🏖️
              </p>
            </div>
            
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-4 mb-4">
              <p className="text-yellow-800 font-bold text-lg">
                🎯 <strong>MISIUNEA:</strong> Să facem BellyBoom brandul #1 pentru mamici în România!
                <br />
                🎁 <strong>RECOMPENSA:</strong> Experiențe de neuitat + produse premium!
              </p>
            </div>
          </div>

          {/* How to Earn Points */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-charcoal mb-6 text-center flex items-center justify-center">
              <Zap className="w-8 h-8 text-coral mr-3" />
              Cum Câștigi Puncte BellyCoins?
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div key={index} className="bg-white border-2 border-sand rounded-2xl p-4 hover:shadow-lg transition-all hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-8 h-8 ${action.color}`} />
                      <div className="flex-1">
                        <div className="font-semibold text-charcoal">{action.action}</div>
                        <div className="text-coral font-bold">{action.points}</div>
                        <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mt-1">
                          {action.limit}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rewards Grid */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-charcoal mb-6 text-center flex items-center justify-center">
              <Gift className="w-8 h-8 text-emerald-500 mr-3" />
              Recompensele Te Așteaptă!
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward, index) => {
                const Icon = reward.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-white to-sand/30 border border-sand rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${reward.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h5 className="font-bold text-charcoal text-center mb-2">{reward.title}</h5>
                    <p className="text-charcoal/70 text-sm text-center mb-3">{reward.description}</p>
                    
                    <div className="bg-coral/10 text-coral text-center py-2 px-4 rounded-xl font-bold text-sm mb-2">
                      {reward.points}
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs text-center py-2 px-3 rounded-lg">
                      <strong>Cerințe:</strong> {reward.requirements}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special Announcements */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 border-2 border-purple-300 mb-8">
            <h4 className="text-2xl font-bold text-center text-purple-800 mb-4 flex items-center justify-center">
              <Crown className="w-8 h-8 mr-3 text-yellow-500" />
              🌟 EVENIMENTE SPECIALE 2024! 🌟
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="bg-white/60 rounded-2xl p-4">
                <Calendar className="w-8 h-8 text-coral mx-auto mb-2" />
                <h5 className="font-bold text-charcoal">BellyBoom Retreat</h5>
                <p className="text-sm text-charcoal/70">Weekend la munte cu 20 de mamici</p>
                <p className="text-coral font-bold">Martie 2024</p>
              </div>
              
              <div className="bg-white/60 rounded-2xl p-4">
                <MapPin className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h5 className="font-bold text-charcoal">BellyBoom City Tour</h5>
                <p className="text-sm text-charcoal/70">Ieșiri lunare în București</p>
                <p className="text-emerald-500 font-bold">În fiecare lună</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-8 border-2 border-coral/30">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              🚀 READY TO LEVEL UP? 🚀
            </h3>
            
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              <strong>Începe ACUM!</strong> Fă primul post cu <strong>#BellyBoom</strong>, 
              tag-uiește 3 prietene și intră în cea mai cool comunitate de mamici din România! 
              <br />
              <span className="text-coral font-bold">Fiecare zi fără a participa = puncte pierdute! ⏰</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <button className="bg-gradient-to-r from-coral to-emerald text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
                <Instagram className="w-5 h-5 mr-2" />
                Începe pe Instagram
                <Sparkles className="w-5 h-5 ml-2" />
              </button>
              
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center">
                <Facebook className="w-5 h-5 mr-2" />
                Share pe Facebook
              </button>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-2xl">
              <p className="text-yellow-800 font-bold">
                ⚡ <strong>BONUS EARLY BIRD:</strong> Primii 100 de participanți primesc 50 puncte GRATUIT! ⚡
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityRewardsAnnouncement;
