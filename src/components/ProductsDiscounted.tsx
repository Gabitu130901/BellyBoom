import React from 'react';
import { PRODUCTS } from '../data/products';
import { Percent, ShoppingBag } from 'lucide-react';

const ProductsDiscounted: React.FC = () => {
  const list = PRODUCTS.filter(p => p.isDiscounted);

  return (
    <section className="py-16" id="oferte-bellyboom">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center mb-6"><Percent className="w-5 h-5 text-pink-500 mr-2"/> Produse la Reduceri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(item => (
            <div key={item.id} className="rounded-3xl border border-pink-200 bg-white/70 backdrop-blur p-5 hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded-2xl mb-4" />
              <h3 className="font-semibold text-slate-900 mb-1">{item.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-pink-600 font-bold">{item.price} RON</span>
                <span className="text-slate-500 line-through text-sm">{item.originalPrice} RON</span>
              </div>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-2xl font-semibold transition-colors flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 mr-2" /> Adaugă în Coș
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDiscounted;


