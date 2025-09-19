import React from 'react';
import { X, Settings, LogOut, Crown, Sparkles } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'Acasă', href: '#', icon: '🏠' },
    { label: 'Colecții', href: '#', icon: '✨' },
    { label: 'Flash Sale', href: '#flash-sale', icon: '⚡' },
    { label: 'Oferte BellyBoom', href: '#oferte-bellyboom', icon: '🎁' },
    { label: 'Ghid de Mărimi', href: '#ghid-marimi', icon: '📏' },
    { label: 'Contact', href: '#contact', icon: '📬' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-ivory via-white to-sand backdrop-blur-xl border-l border-coral/20 transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-coral to-emerald flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-charcoal font-semibold">Sarah M.</p>
              <p className="text-charcoal/70 text-sm">Săptămâna 24 • Style Maven</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-sand hover:bg-sand/70 transition-colors"
          >
            <X className="h-6 w-6 text-charcoal" />
          </button>
        </div>

        {/* User Stats */}
        <div className="p-6 border-b border-white/10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-1">1,250</div>
              <div className="text-gray-400 text-xs">BellyCoins</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">15</div>
              <div className="text-gray-400 text-xs">Comenzi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-1">89</div>
              <div className="text-gray-400 text-xs">Puncte de Stil</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-4 p-3 rounded-2xl text-charcoal hover:bg-sand/50 transition-colors duration-200 group"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="group-hover:text-coral transition-colors">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>


        {/* Current Challenges */}
        <div className="p-6 border-t border-white/10">
          <h3 className="text-charcoal font-semibold mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
            Provocări Active
          </h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-3 border border-pink-400/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-pink-300 text-sm font-medium">Provocarea Glow Up</span>
                <span className="text-yellow-400 text-xs">7 zile rămase</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="space-y-3">
            <button className="flex items-center space-x-3 w-full p-3 rounded-2xl text-gray-300 hover:bg-white/5 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Setări</span>
            </button>
            <button className="flex items-center space-x-3 w-full p-3 rounded-2xl text-gray-300 hover:bg-white/5 transition-colors">
              <LogOut className="w-5 h-5" />
              <span>Deconectare</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;