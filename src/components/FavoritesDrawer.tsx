import React from 'react';
import { X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

interface FavoritesDrawerProps { open: boolean; onClose: () => void; }

const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({ open, onClose }) => {
  const { favorites, addToCart } = useShop();
  if (!open) return null;
  const favList = PRODUCTS.filter(p => favorites.has(p.id));

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory border-l border-sand shadow-xl flex flex-col">
        <div className="p-4 border-b border-sand flex items-center justify-between">
          <h3 className="font-semibold text-charcoal">Favorite</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-sand"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {favList.length === 0 && <div className="text-slate-500">Nu ai produse la favorite.</div>}
          {favList.map(item => (
            <div key={item.id} className="flex items-center gap-3 border border-sand rounded-2xl p-3 bg-white">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="font-medium text-charcoal">{item.name}</div>
                <div className="text-sm text-slate-600">{item.price} RON</div>
              </div>
              <button onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })} className="px-3 py-2 rounded-xl bg-coral text-white text-sm font-semibold hover:opacity-95">Adaugă</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesDrawer;


