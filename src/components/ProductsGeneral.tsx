import React, { useMemo, useState } from 'react';
import { PRODUCTS, filterByMonth, ProductItem } from '../data/products';
import { Star, ShoppingBag, Zap, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface ProductsGeneralProps {
  month?: number;
}

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => {
  const { addToCart, toggleFavorite, favorites } = useShop();
  const isFav = favorites.has(product.id);
  return (
    <div className="group relative bg-white/60 backdrop-blur-md border border-pink-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
      <div className="relative h-64 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full flex items-center">
          <Zap className="w-3 h-3 mr-1" /> {product.aiMatch}%
        </div>
        <button onClick={() => toggleFavorite(product.id)} className={`absolute top-4 left-4 p-2 rounded-full ${isFav?'bg-pink-500 text-white':'bg-white/80 text-slate-800'} hover:opacity-90`}><Heart className="w-5 h-5" /></button>
      </div>
      <div className="p-5">
        <h3 className="text-slate-900 font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
            ))}
          </div>
          <div className="text-pink-600 font-bold">{product.price} RON</div>
        </div>
        <button onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })} className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-2xl font-semibold transition-colors flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 mr-2" /> Adaugă în Coș
        </button>
      </div>
    </div>
  );
};

const ProductsGeneral: React.FC<ProductsGeneralProps> = ({ month }) => {
  const [styleFilter, setStyleFilter] = useState<'all' | 'sport' | 'casual' | 'iesit' | 'elegant'>('all');
  const list = useMemo(() => {
    let base = filterByMonth(PRODUCTS, month);
    if (styleFilter !== 'all') base = base.filter(p => p.style === styleFilter);
    return base;
  }, [month, styleFilter]);


  return (
    <>
      {/* General Products Section */}
      <section className="py-16" id="products-general">
        <div className="container mx-auto px-4">
          <div className="md:flex flex-col items-center justify-between mb-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 items-center mb-5">Produse Generale</h2>
          <div className="flex gap-2 jusitfy-center items-center">
            {['all','sport','casual','iesit','elegant'].map(s => (
              <button key={s} onClick={() => setStyleFilter(s as any)} className={`px-4 py-2 rounded-full text-sm border ${styleFilter===s?'bg-pink-500 text-white border-pink-500':'bg-white text-slate-700 border-pink-200 hover:bg-pink-50'}`}>{s==='all'?'Toate':s.charAt(0).toUpperCase()+s.slice(1)}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductsGeneral;


