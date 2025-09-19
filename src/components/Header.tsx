import React, { useState } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, Baby, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import ProfilePage from './ProfilePage';

// Simple inline SVG logo for BellyBoom brand
const BellyBoomLogo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#34495E"/>
    <path d="M20 30c0-6.627 5.373-12 12-12s12 5.373 12 12c0 5.236-3.363 9.68-8 11.309V44a4 4 0 11-8 0v-2.691C23.363 39.68 20 35.236 20 30z" fill="#FF6B6B"/>
    <circle cx="40" cy="26" r="3" fill="#2ECC71"/>
  </svg>
);

interface HeaderProps {
  onMenuToggle: () => void;
  onOpenCart?: () => void;
  onOpenFavorites?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, onOpenCart, onOpenFavorites }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showCollections, setShowCollections] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { favCount, cartCount, openAuth, user, signOut } = useShop();

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category?.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur border-b border-sand sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer relative z-10">
              <div className="relative">
                <BellyBoomLogo />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-emerald animate-pulse" />
              </div>
              <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-coral to-emerald bg-clip-text text-transparent">
                BellyBoom
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-charcoal hover:text-coral transition-colors relative group">
                Acasă
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => setShowCollections(!showCollections)} className="text-charcoal hover:text-coral transition-colors relative group">
                Colecții
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('flash-sale')} className="text-charcoal hover:text-coral transition-colors relative group">
                Flash Sale
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('oferte-bellyboom')} className="text-charcoal hover:text-coral transition-colors relative group">
                Oferte BellyBoom
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('ghid-marimi')} className="text-charcoal hover:text-coral transition-colors relative group">
                Ghid Mărimi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-coral transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors"
              >
                <Search className="h-5 w-5 text-charcoal" />
              </button>
              <button onClick={onOpenFavorites} className="p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors relative" aria-label="Favorite">
                <Heart className="h-5 w-5 text-charcoal" />
                {favCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full h-5 min-w-5 px-1 flex items-center justify-center">{favCount}</span>
                )}
              </button>
              <button onClick={onOpenCart} className="p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors relative" aria-label="Coș">
                <ShoppingBag className="h-5 w-5 text-charcoal" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full h-5 min-w-5 px-1 flex items-center justify-center">{cartCount}</span>
                )}
              </button>
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <User className="h-5 w-5 text-charcoal" />
                    )}
                    <span className="text-sm text-charcoal font-medium hidden md:block">{user.name}</span>
                  </button>
                  
                  {/* User Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-sand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 border-b border-sand">
                      <div className="flex items-center space-x-3">
                        {user.avatar && (
                          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                        )}
                        <div>
                          <div className="font-semibold text-charcoal">{user.name}</div>
                          <div className="text-sm text-charcoal/70">{user.email}</div>
                          {user.pregnancyWeek && (
                            <div className="text-xs text-coral">Săptămâna {user.pregnancyWeek}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <button 
                        onClick={() => setShowProfile(true)}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-sand transition-colors text-charcoal"
                      >
                        Profilul meu
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-sand transition-colors text-charcoal">
                        Comenzile mele
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-sand transition-colors text-charcoal">
                        Setări
                      </button>
                      <hr className="my-2 border-sand" />
                      <button 
                        onClick={signOut}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-red-50 transition-colors text-red-600"
                      >
                        Deconectează-te
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={openAuth} className="p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors" aria-label="Cont">
                  <User className="h-5 w-5 text-charcoal" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg bg-sand hover:bg-sand/70 transition-colors"
            >
              <Menu className="h-6 w-6 text-charcoal" />
            </button>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="mt-4 animate-fadeIn">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Caută haine de maternitate, mărimi, stiluri..."
                  className="w-full bg-white border border-sand rounded-2xl px-6 py-3 text-charcoal placeholder-slate-500 focus:outline-none focus:border-coral transition-colors"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
              </div>
              
              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-sand rounded-2xl shadow-lg mt-2 max-h-80 overflow-y-auto z-50">
                  {searchResults.map((product) => (
                    <div key={product.id} className="flex items-center p-4 hover:bg-sand/30 cursor-pointer border-b border-sand last:border-0">
                      <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover mr-4" />
                      <div className="flex-1">
                        <h4 className="font-medium text-charcoal">{product.name}</h4>
                        <p className="text-sm text-slate-600">{product.price} RON</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Collections Modal */}
      {showCollections && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowCollections(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-charcoal">Colecțiile Noastre</h2>
              <button onClick={() => setShowCollections(false)} className="p-2 rounded-full hover:bg-sand">
                <X className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-coral/20 to-coral/10 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToSection('products-general')}>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Colecția Generală</h3>
                <p className="text-slate-600">Haine confortabile pentru toată sarcina</p>
              </div>
              <div className="bg-gradient-to-br from-emerald/20 to-emerald/10 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToSection('flash-sale')}>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Flash Sale</h3>
                <p className="text-slate-600">Oferte limitate în timp</p>
              </div>
              <div className="bg-gradient-to-br from-sand to-sand/50 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToSection('oferte-bellyboom')}>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Oferte BellyBoom</h3>
                <p className="text-slate-600">Reduceri speciale pentru mamici</p>
              </div>
            </div>
          </div>
        </div>
      )}

    

      {/* Profile Page Modal */}
      {showProfile && (
        <ProfilePage onClose={() => setShowProfile(false)} />
      )}
    </>
  );
};

export default Header;