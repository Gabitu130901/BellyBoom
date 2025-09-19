import React, { useState, useMemo } from 'react';
import { Star, ShoppingBag, Heart, Calendar, Baby, Sparkles, Gift, Crown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

const MONTHS = [1,2,3,4,5,6,7,8,9];

// Monthly collections data
const MONTHLY_COLLECTIONS = {
  1: {
    title: "Luna 1 - Începutul Călătoriei",
    subtitle: "Prima lună de sarcină",
    description: "Produse pentru începutul sarcinii",
    color: "from-emerald-200 to-emerald-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(1)),
    recommendations: ["Leggings confortabile", "Topuri elastice", "Pijamale moi"],
    tips: "Începe să-ți creezi garderoba de tranziție cu haine confortabile"
  },
  2: {
    title: "Luna 2 - Schimbările Subtile",
    subtitle: "Prima rotunjire",
    description: "Haine pentru schimbările subtile",
    color: "from-blue-200 to-blue-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(2)),
    recommendations: ["Leggings cu suport", "Topuri pentru alăptare", "Pijamale moi"],
    tips: "Evită hainele prea strâmte și alege materiale elastice"
  },
  3: {
    title: "Luna 3 - Prima Burtică",
    subtitle: "Burtica devine vizibilă",
    description: "Produse pentru prima burtică",
    color: "from-purple-200 to-purple-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(3)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Timpul pentru haine mai largi și rochii wrap elegante"
  },
  4: {
    title: "Luna 4 - Burtica în Creștere",
    subtitle: "Silueta se schimbă",
    description: "Haine pentru burtica în creștere",
    color: "from-pink-200 to-pink-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(4)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Investește în haine de maternitate cu stil"
  },
  5: {
    title: "Luna 5 - Burtica Vizibilă",
    subtitle: "Burtica este clar vizibilă",
    description: "Produse pentru burtica vizibilă",
    color: "from-orange-200 to-orange-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(5)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Perfecte pentru ocazii speciale cu stil maternitate"
  },
  6: {
    title: "Luna 6 - Jumătatea Călătoriei",
    subtitle: "La jumătatea sarcinii",
    description: "Haine pentru jumătatea sarcinii",
    color: "from-teal-200 to-teal-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(6)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Confortul este prioritatea în această etapă"
  },
  7: {
    title: "Luna 7 - Burtica Mare",
    subtitle: "Burtica este foarte mare",
    description: "Produse pentru burtica mare",
    color: "from-red-200 to-red-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(7)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Hainele trebuie să fie foarte largi și confortabile"
  },
  8: {
    title: "Luna 8 - Pregătirea Finală",
    subtitle: "Aproape de naștere",
    description: "Produse pentru pregătirea finală",
    color: "from-indigo-200 to-indigo-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(8)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Pregătește-te pentru alăptare cu haine practice"
  },
  9: {
    title: "Luna 9 - Finalul Călătoriei",
    subtitle: "Ultima lună de sarcină",
    description: "Produse pentru ultima lună",
    color: "from-yellow-200 to-yellow-400",
    products: PRODUCTS.filter(p => p.monthsRecommended.includes(9)),
    recommendations: ["Rochii wrap", "Leggings cu suport", "Topuri pentru alăptare"],
    tips: "Pregătește-te pentru naștere cu haine confortabile"
  }
};

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const { addToCart, toggleFavorite, favorites } = useShop();
  const isFav = favorites.has(product.id);

  return (
    <div className="group relative bg-white/90 backdrop-blur-md border border-sand rounded-3xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <button 
          onClick={() => toggleFavorite(product.id)} 
          className={`absolute top-4 left-4 p-3 rounded-full ${isFav ? 'bg-coral text-white shadow-lg' : 'bg-white/90 text-charcoal'} hover:opacity-90 transition-all hover:scale-110`}
        >
          <Heart className="w-5 h-5" />
        </button>
        <div className="absolute top-4 right-4 bg-coral text-white text-sm px-3 py-2 rounded-full flex items-center shadow-lg">
          <Star className="w-4 h-4 mr-1" /> {product.rating}
        </div>
        {/* Discount Badge */}
        {product.price > 200 && (
          <div className="absolute bottom-4 left-4 bg-emerald text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
            -10%
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-charcoal mb-3 text-lg line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-coral">{product.price} RON</span>
            {product.price > 200 && (
              <span className="text-sm text-charcoal/50 line-through ml-2">{Math.round(product.price * 1.1)} RON</span>
            )}
          </div>
          <button 
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
            className="bg-coral text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-coral/90 transition-all hover:scale-105 flex items-center shadow-lg"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Adaugă în Coș
          </button>
        </div>
      </div>
    </div>
  );
};

const MomsCalendar: React.FC = () => {
  // Start with null and never use localStorage
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'rating' | 'name'>('default');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Handle month selection
  const handleMonthClick = (month: number) => {
    console.log(`Clicked month: ${month}`);
    setCurrentMonth(month);
  };

  const currentCollection = currentMonth ? MONTHLY_COLLECTIONS[currentMonth as keyof typeof MONTHLY_COLLECTIONS] : null;

  // Sort and filter products
  const sortedProducts = useMemo(() => {
    if (!currentCollection) return [];
    
    let products = [...currentCollection.products];
    
    // Filter by category
    if (filterCategory !== 'all') {
      products = products.filter(p => 
        p.category?.toLowerCase().includes(filterCategory.toLowerCase()) ||
        p.name.toLowerCase().includes(filterCategory.toLowerCase())
      );
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'name':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  }, [currentCollection, sortBy, filterCategory]);

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden" id="calendar-mamici">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-br from-coral/20 to-emerald/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-gradient-to-br from-purple/20 to-pink/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald/10 to-coral/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-coral/30 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-emerald/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink/30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-3xl px-8 py-4 mb-10 shadow-2xl border border-white/50 animate-fadeIn">
            <div className="w-8 h-8 bg-gradient-to-r from-coral to-emerald rounded-full flex items-center justify-center mr-4">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-charcoal">Călătoria Ta în 9 Luni</span>
          </div>
          
          <h2 className="text-7xl font-black text-charcoal mb-8 leading-tight animate-fadeIn">
            <span className="bg-gradient-to-r from-coral via-purple to-emerald bg-clip-text text-transparent">
              Transformarea
            </span>
            <br />
            <span className="text-charcoal/90">Magică</span>
          </h2>
          
          <p className="text-2xl text-charcoal/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeIn">
            Descoperă cum stilul tău evoluează odată cu corpul tău. 
            Fiecare săptămână aduce noi provocări și noi oportunități de a străluci! ✨
          </p>
        </div>

        {/* Interactive Pregnancy Journey Timeline */}
        <div className="relative mb-32">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral/30 to-emerald/30"></div>
            </div>
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-4xl font-black text-charcoal mb-4">
                Călătoria Ta în 
                <span className="bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent"> 9 Luni</span>
              </h3>
              <p className="text-xl text-charcoal/70">Alege etapa pentru produse personalizate</p>
            </div>
            
            {/* Interactive Timeline */}
            <div className="relative">
              {/* Timeline Line - removed gradient line */}
              {/* <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-coral via-purple to-emerald rounded-full transform -translate-y-1/2"></div> */}
              
              {/* Timeline Nodes */}
              <div className="flex justify-between items-center relative z-10">
                {MONTHS.map((month) => {
                  const isSelected = currentMonth === month;
                  
                  return (
                    <div key={month} className="flex flex-col items-center group cursor-pointer" onClick={() => handleMonthClick(month)}>
                      {/* Month Circle */}
                      <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isSelected 
                          ? 'bg-gradient-to-r from-coral to-emerald shadow-2xl scale-125' 
                          : 'bg-white/80 border-4 border-sand/50 shadow-lg hover:scale-110 hover:shadow-xl hover:border-coral/50'
                      }`}>
                        <span className={`text-2xl font-black ${
                          isSelected ? 'text-white' : 'text-charcoal'
                        }`}>
                          {month}
                        </span>
                        
                        {/* Progress Indicator */}
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Month Label */}
                      <div className="mt-4 text-center">
                        <div className={`text-sm font-bold ${
                          isSelected ? 'text-coral' : 'text-charcoal/70'
                        }`}>
                          Luna {month}
                        </div>
                        <div className="text-xs text-charcoal/50 mt-1">
                          {month <= 3 ? 'Început' : month <= 6 ? 'Mijloc' : 'Final'}
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-coral/10 to-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Progress Bar - removed gradient bar */}
              {/* <div className="mt-8 bg-sand/30 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-coral to-emerald rounded-full transition-all duration-1000"
                  style={{ width: selectedMonth ? `${(selectedMonth / 9) * 100}%` : '0%' }}
                ></div>
              </div> */}
              
              {/* Progress Text */}
              <div className="text-center mt-4">
                <span className="text-lg font-bold text-charcoal">
                  {currentMonth ? `Luna ${currentMonth} din 9` : 'Selectează o lună pentru a începe'}
                </span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Selected Month Collection - 3D Style */}
        {currentCollection && (
          <div className="relative mb-32">
            {/* 3D Container */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-white/50 relative overflow-hidden transform perspective-1000">
              {/* 3D Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral/30 to-emerald/30"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple/20 to-pink/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-emerald/20 to-coral/20 rounded-full blur-2xl"></div>
              </div>
              
              {/* Collection Header - 3D Style */}
              <div className="text-center mb-16 relative z-10">
                <div className="relative inline-block mb-8 transform hover:scale-110 transition-transform duration-500">
                  <div className={`w-32 h-32 bg-gradient-to-r ${currentCollection.color} rounded-full flex items-center justify-center mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                    <Baby className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-8 left-8 w-6 h-6 bg-coral/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -bottom-8 right-8 w-4 h-4 bg-emerald/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                </div>
                
                <h3 className="text-5xl font-black text-charcoal mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
                  <span className="block">{currentCollection.title.split(' - ')[0]}</span>
                  <span className="bg-gradient-to-r from-coral via-purple to-emerald bg-clip-text text-transparent">
                    {currentCollection.title.split(' - ')[1]}
                  </span>
                </h3>
                
                <p className="text-2xl text-charcoal/70 mb-6 font-medium">{currentCollection.subtitle}</p>
                <p className="text-xl text-charcoal/60 max-w-3xl mx-auto leading-relaxed">{currentCollection.description}</p>
              </div>

            {/* Recommendations - 3D Cards */}
            <div className="bg-gradient-to-br from-coral/5 via-emerald/5 to-purple/5 rounded-3xl p-12 mb-16 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-coral/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald/10 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h4 className="text-4xl font-black text-charcoal mb-8 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-coral to-emerald rounded-full flex items-center justify-center mr-4 shadow-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  Recomandări pentru {currentCollection.title.split(' - ')[0]}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentCollection.recommendations.map((rec, index) => (
                    <div key={index} className="group relative">
                      {/* 3D Card */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-1 border border-white/50 transform perspective-1000">
                        {/* Card Icon */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-coral/20 to-emerald/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-500 shadow-lg">
                            <Gift className="w-10 h-10 text-coral" />
                          </div>
                          
                          {/* Floating Elements */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-coral/30 rounded-full animate-bounce" style={{animationDelay: `${index * 0.2}s`}}></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald/30 rounded-full animate-bounce" style={{animationDelay: `${index * 0.3}s`}}></div>
                        </div>
                        
                        <h5 className="font-black text-charcoal mb-4 text-xl">{rec}</h5>
                        <div className="text-sm text-charcoal/70 leading-relaxed">{currentCollection.tips}</div>
                        
                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-coral/5 to-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid - 3D Style */}
            <div className="mb-16">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/50 shadow-xl relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-coral/10 to-emerald/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple/10 to-pink/10 rounded-full blur-2xl"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
                  <h4 className="text-4xl font-black text-charcoal flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald to-coral rounded-full flex items-center justify-center mr-4 shadow-xl">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    Produse Perfecte pentru Luna {currentMonth}
                  </h4>
                  
                  {/* Sort and Filter Controls - 3D Style */}
                  <div className="flex flex-wrap gap-6">
                    {/* Sort Dropdown */}
                    <div className="flex items-center space-x-4">
                      <label className="text-lg font-bold text-charcoal whitespace-nowrap">Sortează:</label>
                      <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="px-6 py-4 rounded-2xl border border-white/50 bg-white/90 text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all shadow-lg hover:shadow-xl"
                      >
                        <option value="default">Recomandat</option>
                        <option value="price-asc">Preț Crescător</option>
                        <option value="price-desc">Preț Descrescător</option>
                        <option value="rating">Rating</option>
                        <option value="name">Nume A-Z</option>
                      </select>
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex items-center space-x-4">
                      <label className="text-lg font-bold text-charcoal whitespace-nowrap">Categorie:</label>
                      <select 
                        value={filterCategory} 
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-6 py-4 rounded-2xl border border-white/50 bg-white/90 text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all shadow-lg hover:shadow-xl"
                      >
                        <option value="all">Toate</option>
                        <option value="dress">Rochii</option>
                        <option value="jeans">Jeans</option>
                        <option value="top">Topuri</option>
                        <option value="cardigan">Cardigane</option>
                        <option value="maternity">Maternitate</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products Count - 3D Style */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-coral/10 to-emerald/10 rounded-3xl p-6 border border-white/50 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-coral/20 to-emerald/20 rounded-full blur-xl"></div>
                  <p className="text-xl text-charcoal/80 font-bold text-center relative z-10">
                    ✨ Afișez <span className="text-coral font-black text-2xl">{sortedProducts.length}</span> produse perfecte pentru Luna {currentMonth}
                  </p>
                </div>
              </div>
              
              {/* Products Grid - 3D Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* No Products Message - 3D Style */}
              {sortedProducts.length === 0 && (
                <div className="text-center py-20 bg-gradient-to-br from-slate-50 to-sand/30 rounded-3xl border border-white/50 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-coral/10 to-emerald/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple/10 to-pink/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-coral/20 to-emerald/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                      <Gift className="w-12 h-12 text-coral" />
                    </div>
                    <h5 className="text-3xl font-black text-charcoal/70 mb-4">Nu s-au găsit produse</h5>
                    <p className="text-lg text-charcoal/50 max-w-lg mx-auto">Încearcă să schimbi filtrele sau să alegi o altă lună pentru a vedea mai multe opțiuni</p>
                  </div>
                </div>
              )}
            </div>
            </div>

            {/* Pro Tip - 3D Style */}
            <div className="bg-gradient-to-br from-yellow/10 via-orange/10 to-red/10 rounded-3xl p-12 border border-white/50 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow/20 to-orange/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange/20 to-red/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-3xl font-black text-charcoal">Pro Tip</h5>
                </div>
                <p className="text-xl text-charcoal/80 leading-relaxed">{currentCollection.tips}</p>
              </div>
            </div>
          </div>
        )}

        {/* Default State - 3D Spectacular */}
        {!currentMonth && (
          <div className="text-center bg-white/90 backdrop-blur-lg rounded-3xl p-20 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* 3D Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-emerald/5"></div>
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-coral/10 to-emerald/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple/10 to-pink/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 bg-gradient-to-r from-coral to-emerald rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl transform hover:scale-110 transition-transform duration-500">
                <Calendar className="w-16 h-16 text-white" />
              </div>
              
              <h3 className="text-5xl font-black text-charcoal mb-8 leading-tight">
                Pregătită să îți începi 
                <br />
                <span className="bg-gradient-to-r from-coral via-purple to-emerald bg-clip-text text-transparent">
                  transformarea?
                </span>
              </h3>
              
              <p className="text-2xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Descoperă colecțiile noastre organizate pe săptămâni de sarcină și găsește stilul perfect pentru fiecare etapă.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <button 
                  onClick={() => handleMonthClick(1)}
                  className="bg-gradient-to-r from-coral to-emerald text-white px-12 py-6 rounded-3xl font-black text-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center shadow-xl"
                >
                  <Baby className="w-6 h-6 mr-3" />
                  Începe cu Luna 1
                </button>
                <button 
                  onClick={() => handleMonthClick(5)}
                  className="bg-gradient-to-r from-emerald to-coral text-white px-12 py-6 rounded-3xl font-black text-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center shadow-xl"
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Luna 5
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MomsCalendar;


