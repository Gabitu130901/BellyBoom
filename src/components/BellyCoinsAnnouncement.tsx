import React, { useState } from 'react';
import { 
  Star, Crown, Sparkles, X, Instagram, 
  Camera, Tag, Award, Diamond,
  Coins, Rocket, Target, Users
} from 'lucide-react';

const BellyCoinsAnnouncement: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showDuration, setShowDuration] = useState(15); // 15 seconds countdown
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-close after 15 seconds
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

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    if (isOpen) {
      const slideTimer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(slideTimer);
    }
  }, [isOpen]);

  const slides = [
    {
      title: "🌟 BellyCoins Launch!",
      subtitle: "Sistemul nostru de recompense este AICI!",
      description: "Câștigă puncte pentru fiecare post, story și hashtag cu #BellyBoom!",
      icon: Rocket,
      color: "from-coral to-rose-500",
      bgPattern: "🎉✨💎"
    },
    {
      title: "📱 Instagram Rewards",
      subtitle: "Maxim 2 postări pe zi = Calitate > Cantitate!",
      description: "Feed: 15 puncte | Story: 8 puncte | Hashtag: 5 puncte",
      icon: Instagram,
      color: "from-pink-500 to-purple-500",
      bgPattern: "📸💕🎯"
    },
    {
      title: "🏆 Premium Rewards",
      subtitle: "De la reduceri la vacanțe cu mamici!",
      description: "500+ puncte = Reduceri | 5000+ puncte = Vacanțe plătite!",
      icon: Crown,
      color: "from-emerald-500 to-teal-500",
      bgPattern: "👑💎🌟"
    }
  ];

  const instagramRewards = [
    {
      type: "Instagram Feed",
      icon: Camera,
      points: "15 puncte",
      limit: "Max 2 postări/zi",
      requirements: "Poza cu produse BellyBoom + #BellyBoom",
      color: "from-pink-400 to-rose-500"
    },
    {
      type: "Instagram Story",
      icon: Sparkles,
      points: "8 puncte",
      limit: "Max 5 story-uri/zi",
      requirements: "Story cu produse + tag @bellyboom_ro",
      color: "from-purple-400 to-pink-500"
    },
    {
      type: "Hashtag #BellyBoom",
      icon: Tag,
      points: "5 puncte",
      limit: "Fără limită",
      requirements: "Orice post cu #BellyBoom",
      color: "from-blue-400 to-purple-500"
    },
    {
      type: "Tag Prietene",
      icon: Users,
      points: "10 puncte",
      limit: "Max 3 tag-uri/zi",
      requirements: "Tag 3+ prietene în comentarii",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const dailyLimits = [
    {
      platform: "Instagram Feed",
      limit: "2 postări/zi",
      reason: "Calitate > Cantitate",
      icon: Camera
    },
    {
      platform: "Instagram Story",
      limit: "5 story-uri/zi",
      reason: "Conținut autentic",
      icon: Sparkles
    },
    {
      platform: "Tag Prietene",
      limit: "3 tag-uri/zi",
      reason: "Evită spam-ul",
      icon: Users
    },
    {
      platform: "Hashtag #BellyBoom",
      limit: "Fără limită",
      reason: "Promovare liberă",
      icon: Tag
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative">
        
        {/* Animated Header */}
        <div className={`bg-gradient-to-r ${slides[currentSlide].color} text-white p-6 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
          
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
              {React.createElement(slides[currentSlide].icon, { className: "w-16 h-16 mr-4 animate-bounce" })}
              <Diamond className="w-12 h-12 ml-4 animate-spin" />
            </div>
            
            <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
            <h2 className="text-2xl font-semibold mb-3">{slides[currentSlide].subtitle}</h2>
            <p className="text-xl opacity-90">{slides[currentSlide].description}</p>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 text-4xl animate-float">💎</div>
          <div className="absolute top-20 right-20 text-3xl animate-bounce">✨</div>
          <div className="absolute bottom-10 left-20 text-3xl animate-pulse">🌟</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-float">🎉</div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          
          {/* Instagram Rewards Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <Instagram className="w-8 h-8 text-pink-500 mr-3" />
              Recompense Instagram
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {instagramRewards.map((reward, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-sand/30 border border-sand rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${reward.color} flex items-center justify-center mb-4 mx-auto`}>
                    <reward.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-charcoal text-center mb-2">{reward.type}</h4>
                  <div className="bg-coral/10 text-coral text-center py-2 px-4 rounded-xl font-bold text-sm mb-2">
                    {reward.points}
                  </div>
                  <div className="bg-emerald/10 text-emerald text-center py-1 px-3 rounded-lg font-semibold text-xs mb-2">
                    {reward.limit}
                  </div>
                  <p className="text-charcoal/70 text-sm text-center">{reward.requirements}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Limits Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <Target className="w-8 h-8 text-emerald mr-3" />
              Reguli Zilnice - Calitate &gt; Cantitate
            </h3>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-yellow-600 mr-3" />
                <h4 className="text-xl font-bold text-yellow-800">De ce limităm postările?</h4>
              </div>
              <p className="text-yellow-700 mb-4">
                Vrem conținut <strong>autentic și de calitate</strong>, nu spam! 
                Maxim 2 postări pe zi pe Instagram feed = mai multă atenție la fiecare post.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dailyLimits.map((limit, index) => (
                  <div key={index} className="bg-white/60 rounded-xl p-4 text-center">
                    <limit.icon className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-bold text-yellow-800 text-sm">{limit.platform}</div>
                    <div className="text-yellow-700 text-xs">{limit.limit}</div>
                    <div className="text-yellow-600 text-xs italic">{limit.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to Earn Points */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <Coins className="w-8 h-8 text-coral mr-3" />
              Cum Câștigi BellyCoins?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-coral/10 to-rose-100 rounded-2xl p-6 border border-coral/20">
                <div className="w-16 h-16 bg-gradient-to-r from-coral to-rose-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-charcoal text-center mb-2">Instagram Feed</h4>
                <div className="text-center mb-3">
                  <span className="bg-coral text-white px-3 py-1 rounded-full text-sm font-bold">15 puncte</span>
                </div>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• Poza cu produse BellyBoom</li>
                  <li>• Hashtag #BellyBoom</li>
                  <li>• Maxim 2 postări/zi</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple/10 to-pink-100 rounded-2xl p-6 border border-purple/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-charcoal text-center mb-2">Instagram Story</h4>
                <div className="text-center mb-3">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">8 puncte</span>
                </div>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• Story cu produse</li>
                  <li>• Tag @bellyboom_ro</li>
                  <li>• Maxim 5 story-uri/zi</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald/10 to-teal-100 rounded-2xl p-6 border border-emerald/20">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Tag className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-charcoal text-center mb-2">Hashtag & Tag</h4>
                <div className="text-center mb-3">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">5-10 puncte</span>
                </div>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• #BellyBoom = 5 puncte</li>
                  <li>• Tag 3 prietene = 10 puncte</li>
                  <li>• Fără limită zilnică</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-coral to-emerald text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
            >
              <Star className="w-6 h-6 mr-2" />
              Începe să Câștigi BellyCoins!
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Vezi Regulile Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellyCoinsAnnouncement;
