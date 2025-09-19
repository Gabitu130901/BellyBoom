import React from 'react';
import { X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const AuthModal: React.FC = () => {
  const { isAuthOpen, closeAuth } = useShop();
  if (!isAuthOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={closeAuth} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-ivory border border-sand rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-charcoal">Conectează-te</h3>
            <button onClick={closeAuth} className="p-2 rounded-full hover:bg-sand">
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-white border border-sand text-charcoal py-3 rounded-xl font-medium hover:bg-sand">Continuă cu Google</button>
            <button className="w-full bg-white border border-sand text-charcoal py-3 rounded-xl font-medium hover:bg-sand">Continuă cu Facebook</button>
            <div className="relative py-2 text-center text-sm text-slate-500">sau</div>
            <input placeholder="Email" className="w-full bg-white border border-sand rounded-xl px-4 py-3" />
            <input placeholder="Parolă" type="password" className="w-full bg-white border border-sand rounded-xl px-4 py-3" />
            <button className="w-full bg-coral hover:opacity-95 text-white py-3 rounded-xl font-semibold">Continuă</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;


