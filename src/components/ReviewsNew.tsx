import React, { useState } from 'react';
import { 
  Star, Heart, ThumbsUp, MessageCircle, Verified, Award, Camera, Quote,
  ChevronLeft, ChevronRight, Shield, Clock, Baby, Crown, Sparkles,
  CheckCircle, Users, TrendingUp, Filter, Eye, Share2, Play, Package,
  Truck, RotateCcw, Info
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ReviewsNew: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const { favorites, toggleFavorite } = useShop();

  const reviews = [
    {
      id: 1,
      user: {
        name: 'Alexandra Popescu',
        location: 'București',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: true,
        level: 'Style Maven',
        purchases: 12,
        pregnancyWeek: 32,
        memberSince: '2023'
      },
      rating: 5,
      title: 'Am găsit cea mai bună rochie pentru baby shower! 💕',
      content: 'Eram în căutarea unei rochii perfecte pentru baby shower-ul meu și am dat peste această bijuterie! Materialul este incredibil de soft, se întinde perfect cu burtica în creștere, iar culorile sunt exacte ca în poze. Am primit atât de multe complimente! Echipa BellyBoom a fost super răbdătoare cu toate întrebările mele despre mărimi. Livrarea a fost în 2 zile, ambalajul superb - se simțea că despachetez o cadou! 100% recomand!',
      pros: ['Material premium', 'Sizing perfect', 'Livrare super rapidă', 'Ambalaj frumos'],
      cons: [],
      images: [
        'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      product: {
        name: 'Aurora Wrap Dress',
        color: 'Dusty Rose',
        size: 'M (potrivită săpt. 20-36)',
        price: '329 RON',
        material: '95% Modal, 5% Elastan',
        details: 'Croiala wrap, mâneci 3/4, lungime midi, bandă ajustabilă',
        care: 'Lavabil la mașină 30°C, nu se calcă',
        shipping: 'Livrare gratuită peste 200 RON • Retur 30 zile',
        video: 'https://example.com/aurora-dress-review-video.mp4'
      },
      helpful: 89,
      comments: 12,
      date: '3 zile în urmă',
      tags: ['Baby Shower Perfect', 'Calitate Premium', 'Livrare Rapidă'],
      featured: true,
      wouldRecommend: true
    },
    {
      id: 2,
      user: {
        name: 'Maria Ionescu',
        location: 'Cluj-Napoca',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: true,
        level: 'Fashion Pro',
        purchases: 8,
        pregnancyWeek: 28,
        memberSince: '2024'
      },
      rating: 5,
      title: 'Set perfect pentru yoga și relaxare! Recomandat! 🧘‍♀️',
      content: 'Căutam un set confortabil pentru yoga și exerciții ușoare în timpul sarcinii. Materialul este incredibil - se întinde perfect, nu se deformează și este super soft pe piele. Pantalonii au o bandă specială pentru burtică care susține fără să strângă. Am purtat setul 4 ore consecutive și a fost ca o a doua piele! Customer service-ul răspunde în maxim 10 minute, au un chat foarte prietenos. Calitatea materialelor depășește așteptările - am spălat deja de 5 ori la 40 de grade și arată ca nou! Livrarea în 24h a fost bonus!',
      pros: ['Material premium stretch', 'Customer service excelent', 'Calitate excepțională', 'Sizing foarte precis', 'Bandă suport perfectă'],
      cons: ['Aș vrea și mai multe culori'],
      images: [
        'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      product: {
        name: 'Galaxy Yoga Set',
        color: 'Deep Navy',
        size: 'L (potrivit săpt. 16-40)',
        price: '249 RON',
        material: '88% Polyamid, 12% Elastan - antimicrobian',
        details: 'Set 2 piese: leggings cu bandă înaltă + top cu suport integrat',
        care: 'Lavabil la mașină 40°C, uscare rapidă',
        shipping: 'Livrare în 24-48h • Retur gratuit 30 zile',
        video: 'https://example.com/yoga-set-demo.mp4'
      },
      helpful: 156,
      comments: 23,
      date: '1 săptămână în urmă',
      tags: ['Yoga Perfect', 'Customer Service Top', 'Calitate Superioară', 'Livrare Rapidă'],
      featured: false,
      wouldRecommend: true
    },
    {
      id: 3,
      user: {
        name: 'Elena Georgescu',
        location: 'Timișoara',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: true,
        level: 'Trendsetter',
        purchases: 15,
        pregnancyWeek: 36,
        memberSince: '2023'
      },
      rating: 5,
      title: 'La a 3-a sarcină, pot spune: BellyBoom e BEST! 👑',
      content: 'Am încercat TOATE brandurile de maternitate din România și multe din străinătate. BellyBoom e pe cu totul alt nivel! Designurile sunt fresh, moderne, nu te fac să arăți ca o cortină (știu problemele!). Materialele sunt top-tier - am piese de la prima sarcină care încă arată superb. Sistemul de tracking al sarcinii cu recomandări personalizate e genial - îmi propune exact ce am nevoie în fiecare săptămână. Comunitatea de mamici e supper activă, am făcut prietenii reale! Punctele BellyCoins sunt bonus-ul perfect!',
      pros: ['Design superior', 'Durabilitate incredibilă', 'Comunitate fantastică', 'Recomandări personalizate'],
      cons: [],
      images: [
        'https://images.pexels.com/photos/1556677/pexels-photo-1556677.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      product: {
        name: 'Celestial Midi Dress',
        color: 'Sage Green',
        size: 'S (potrivită săpt. 12-32)',
        price: '289 RON',
        material: '92% Bumbac organic, 8% Elastan',
        details: 'Rochie midi cu mâneci scurte, croială A-line, buzunare laterale',
        care: 'Lavabil la mașină 30°C, fier la temperatură mică',
        shipping: 'Livrare gratuită în toată țara • Schimb mărime gratuit',
        video: 'https://example.com/celestial-dress-styling.mp4'
      },
      helpful: 234,
      comments: 45,
      date: '2 săptămâni în urmă',
      tags: ['Experiența completă', 'Comunitate Grozavă', 'Design Modern'],
      featured: true,
      wouldRecommend: true
    }
  ];

  const stats = [
    { 
      label: 'Rating Mediu', 
      value: '4.9/5', 
      icon: Star, 
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
      description: 'din 2.847 review-uri'
    },
    { 
      label: 'Recomandă BellyBoom', 
      value: '98%', 
      icon: ThumbsUp, 
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      description: 'din clienții verificați'
    },
    { 
      label: 'Review-uri cu Poze', 
      value: '89%', 
      icon: Camera, 
      color: 'text-coral',
      bg: 'bg-coral/10',
      description: 'transparență completă'
    },
    { 
      label: 'Response Time', 
      value: '<2h', 
      icon: Clock, 
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      description: 'suport clienți'
    }
  ];

  const filters = [
    { id: 'all', label: 'Toate Review-urile', count: 2847, icon: Users },
    { id: '5star', label: '5 Stele', count: 2156, icon: Star },
    { id: 'verified', label: 'Clienți Verificați', count: 2398, icon: Verified },
    { id: 'photos', label: 'Cu Poze Reale', count: 1876, icon: Camera },
    { id: 'recent', label: 'Recent', count: 234, icon: Clock }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-ivory via-white to-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-coral rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-coral/10 to-emerald/10 rounded-full text-coral text-sm font-medium border border-coral/20 mb-6">
            <Quote className="w-5 h-5 mr-2" />
            Reviews & Testimoniale Verificate
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-charcoal">
            Ce Spun
            <span className="block bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">
              Mamicile 
            </span>
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            <strong>Transparență 100%</strong> - Fiecare review e de la clienți reali, verificați. 
            Citește experiențele autentice ale mamicilor care și-au transformat călătoria de maternitate cu BellyBoom! ✨
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bg} border border-sand/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <Icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-charcoal mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-charcoal/80 mb-1">{stat.label}</div>
                <div className="text-xs text-charcoal/60">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-coral to-emerald text-white border-coral shadow-lg'
                    : 'bg-white text-charcoal border-sand hover:bg-sand/30 hover:border-coral/30'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-sand text-charcoal/70'
                }`}>
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Reviews */}
        <div className="max-w-5xl mx-auto space-y-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                review.featured ? 'border-coral/30 ring-2 ring-coral/10' : 'border-sand'
              }`}
            >
              {/* Featured Badge */}
              {review.featured && (
                <div className="bg-gradient-to-r from-coral to-emerald text-white px-6 py-3 flex items-center justify-center">
                  <Crown className="w-5 h-5 mr-2" />
                  <span className="font-semibold">⭐ Review Recomandat de Comunitate</span>
                </div>
              )}

              <div className="p-8">
                {/* User Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={review.user.avatar}
                        alt={review.user.name}
                        className="w-16 h-16 rounded-full object-cover border-3 border-coral/20 shadow-lg"
                      />
                      {review.user.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1.5 border-2 border-white">
                          <Verified className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-lg font-bold text-charcoal">{review.user.name}</h4>
                        <span className="px-2 py-1 bg-coral/10 text-coral text-xs rounded-full font-medium">
                          {review.user.level}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-sm text-charcoal/70">
                        <span className="flex items-center">
                          <Baby className="w-3 h-3 mr-1" />
                          Săpt. {review.user.pregnancyWeek}
                        </span>
                        <span>•</span>
                        <span>{review.user.location}</span>
                        <span>•</span>
                        <span>{review.user.purchases} comenzi</span>
                        <span>•</span>
                        <span>Member din {review.user.memberSince}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info Card */}
                  <div className="bg-gradient-to-br from-sand/30 to-sand/10 rounded-2xl p-4 border border-sand/50 min-w-72">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-bold text-charcoal text-sm mb-1">{review.product.name}</h5>
                        <div className="text-xs text-charcoal/70 mb-2">
                          {review.product.color} • {review.product.size}
                        </div>
                        <div className="text-coral font-bold text-lg">{review.product.price}</div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(review.id)}
                        className={`p-2 rounded-full transition-colors ${
                          favorites.has(review.id) 
                            ? 'bg-coral text-white' 
                            : 'bg-white text-charcoal/60 hover:bg-coral hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(review.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center text-charcoal/70">
                        <Package className="w-3 h-3 mr-2 text-emerald" />
                        <span className="font-medium">{review.product.material}</span>
                      </div>
                      <div className="flex items-center text-charcoal/70">
                        <Info className="w-3 h-3 mr-2 text-coral" />
                        <span>{review.product.details}</span>
                      </div>
                      <div className="flex items-center text-charcoal/70">
                        <Truck className="w-3 h-3 mr-2 text-blue-500" />
                        <span>{review.product.shipping}</span>
                      </div>
                      
                      {/* Video Button */}
                      {review.product.video && (
                        <button className="flex items-center w-full mt-3 px-3 py-2 bg-coral/10 hover:bg-coral/20 text-coral rounded-xl transition-colors">
                          <Play className="w-3 h-3 mr-2" />
                          <span className="text-xs font-medium">Vezi video review</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < review.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-charcoal/70 font-medium">{review.date}</span>
                  </div>
                  
                  {review.wouldRecommend && (
                    <div className="flex items-center px-3 py-1 bg-emerald/10 text-emerald rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Recomandă produsul
                    </div>
                  )}
                </div>

                {/* Review Title & Content */}
                <h3 className="text-2xl font-bold text-charcoal mb-4 leading-tight">{review.title}</h3>
                
                <div className="bg-sand/20 rounded-2xl p-6 mb-6 border-l-4 border-coral">
                  <Quote className="w-8 h-8 text-coral/40 mb-3" />
                  <p className="text-charcoal leading-relaxed text-lg font-medium">{review.content}</p>
                </div>

                {/* Pros & Cons */}
                {(review.pros.length > 0 || review.cons.length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {review.pros.length > 0 && (
                      <div className="bg-emerald/5 rounded-xl p-4 border border-emerald/20">
                        <h5 className="font-semibold text-emerald mb-3 flex items-center">
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Ce mi-a plăcut:
                        </h5>
                        <ul className="space-y-2">
                          {review.pros.map((pro, idx) => (
                            <li key={idx} className="text-charcoal text-sm flex items-center">
                              <CheckCircle className="w-4 h-4 text-emerald mr-2 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {review.cons.length > 0 && (
                      <div className="bg-orange/5 rounded-xl p-4 border border-orange/20">
                        <h5 className="font-semibold text-orange-500 mb-3">Sugestii de îmbunătățire:</h5>
                        <ul className="space-y-2">
                          {review.cons.map((con, idx) => (
                            <li key={idx} className="text-charcoal text-sm flex items-center">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-charcoal mb-3 flex items-center">
                      <Camera className="w-4 h-4 mr-2 text-coral" />
                      Poze reale de la client:
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {review.images.map((image, idx) => (
                        <div key={idx} className="relative group cursor-pointer">
                          <img
                            src={image}
                            alt={`Poză review ${idx + 1}`}
                            className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform shadow-md"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {review.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-coral/10 to-emerald/10 text-charcoal text-sm rounded-full border border-coral/20 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-sand">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-charcoal/70 hover:text-coral transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="font-medium">Util ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-2 text-charcoal/70 hover:text-emerald transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">Apreciez</span>
                    </button>
                    <button className="flex items-center space-x-2 text-charcoal/70 hover:text-coral transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">Comentarii ({review.comments})</span>
                    </button>
                    <button className="flex items-center space-x-2 text-charcoal/70 hover:text-emerald transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Partajează</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center bg-emerald/10 text-emerald px-3 py-1.5 rounded-full text-sm font-medium">
                    <Shield className="w-4 h-4 mr-1" />
                    Review Verificat
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Shipping & Return Info */}
        <div className="mt-16 mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-5xl mx-auto border border-sand">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center flex items-center justify-center">
              <Truck className="w-8 h-8 text-coral mr-3" />
              Livrare & Retur - Fără Griji! 📦
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Livrare */}
              <div className="text-center p-6 bg-gradient-to-br from-emerald/10 to-emerald/5 rounded-2xl border border-emerald/20">
                <Truck className="w-12 h-12 text-emerald mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-3">Livrare Rapidă</h4>
                <ul className="text-charcoal/70 text-sm space-y-2">
                  <li>• <strong>Bucuresti & Ilfov:</strong> 24h</li>
                  <li>• <strong>Orașe mari:</strong> 24-48h</li>
                  <li>• <strong>Toată țara:</strong> 2-3 zile</li>
                  <li>• <strong>GRATUIT</strong> peste 200 RON</li>
                  <li>• Tracking în timp real</li>
                </ul>
              </div>

              {/* Retur */}
              <div className="text-center p-6 bg-gradient-to-br from-coral/10 to-coral/5 rounded-2xl border border-coral/20">
                <RotateCcw className="w-12 h-12 text-coral mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-3">Retur Simplu</h4>
                <ul className="text-charcoal/70 text-sm space-y-2">
                  <li>• <strong>30 de zile</strong> pentru retur</li>
                  <li>• <strong>Retur GRATUIT</strong> prin curier</li>
                  <li>• Schimb de mărime inclus</li>
                  <li>• Bani înapoi în 3-5 zile</li>
                  <li>• Fără întrebări complicate</li>
                </ul>
              </div>

              {/* Garantie */}
              <div className="text-center p-6 bg-gradient-to-br from-blue/10 to-blue/5 rounded-2xl border border-blue/20">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-3">Garanție BellyBoom</h4>
                <ul className="text-charcoal/70 text-sm space-y-2">
                  <li>• <strong>Calitate garantată</strong> 12 luni</li>
                  <li>• Spălări multiple incluse</li>
                  <li>• Support 24/7 via chat</li>
                  <li>• Sizing guarantee - schimbi gratis</li>
                  <li>• 100% satisfacție garantată</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-coral/5 to-emerald/5 rounded-2xl border border-coral/20">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-coral mr-2" />
                <span className="font-bold text-charcoal">Promisiunea BellyBoom pentru Mamici</span>
                <Heart className="w-6 h-6 text-coral ml-2" />
              </div>
              <p className="text-charcoal/80 text-center leading-relaxed">
                <strong>Înțelegem că fiecare sarcină e unică!</strong> De aceea, echipa noastră de experți în maternitate 
                este disponibilă 24/7 pentru a te ajuta cu măsurile, sfaturi de styling și orice întrebări. 
                <strong>Nu plătești nimic dacă nu ești 100% mulțumită!</strong> ✨
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-8 max-w-4xl mx-auto border border-coral/20">
            <Sparkles className="w-12 h-12 text-coral mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Vrei să fii următoarea mamică fericită? ✨
            </h3>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              Alătură-te celor <strong>2.847+ mamici</strong> care au descoperit stilul perfect cu BellyBoom!
              <br />Fiecare călătorie începe cu primul pas...
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-coral to-emerald text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all transform hover:scale-105">
                Începe Shopping-ul Acum
              </button>
              <button className="bg-white text-charcoal border-2 border-coral px-8 py-4 rounded-2xl font-bold hover:bg-coral hover:text-white transition-all">
                Vezi Mai Multe Review-uri
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsNew;
