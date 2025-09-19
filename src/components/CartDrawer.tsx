import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface CartDrawerProps { open: boolean; onClose: () => void; }

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cart, removeFromCart } = useShop();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory border-l border-sand shadow-xl flex flex-col">
        <div className="p-4 border-b border-sand flex items-center justify-between">
          <h3 className="font-semibold text-charcoal">Coșul tău</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-sand"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {cart.length === 0 && <div className="text-slate-500">Coșul este gol.</div>}
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-3 border border-sand rounded-2xl p-3 bg-white">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="font-medium text-charcoal">{item.name}</div>
                <div className="text-sm text-slate-600">{item.qty} x {item.price} RON</div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-lg hover:bg-sand"><Trash2 className="w-4 h-4 text-charcoal"/></button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-sand">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-charcoal">{subtotal.toFixed(2)} RON</span>
          </div>
          <button className="w-full bg-coral text-white py-3 rounded-2xl font-semibold hover:opacity-95">Continuă la Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;


