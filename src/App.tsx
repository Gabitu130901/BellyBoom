import { useState } from 'react';
import AuthModalNew from './components/AuthModalNew';
import BestSeller from './components/BestSeller';
import CartDrawer from './components/CartDrawer';
import Community from './components/Community';
import CommunityBlog from './components/CommunityBlog';
import FavoritesDrawer from './components/FavoritesDrawer';
import FeaturesNew from './components/FeaturesNew';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroNew from './components/HeroNew';
import LimitedOffers from './components/LimitedOffers';
import LiveSupport from './components/LiveSupport';
import MobileMenu from './components/MobileMenu';
import PregnancyJourney from './components/PregnancyJourney';
import PregnancyVisualizer from './components/PregnancyVisualizer';
import Products from './components/Products';
import ProductsDiscounted from './components/ProductsDiscounted';
import ProductsFlashSale from './components/ProductsFlashSale';
import ProductsGeneral from './components/ProductsGeneral';
import ReviewsNew from './components/ReviewsNew';
import SizeGuide from './components/SizeGuide';
import { ShopProvider } from './context/ShopContext';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ShopProvider>
      <div className="min-h-screen bg-pink-50 text-slate-900">
        <Header onMenuToggle={toggleMobileMenu} onOpenCart={() => setCartOpen(true)} onOpenFavorites={() => setFavoritesOpen(true)} />
        <HeroNew />
        <PregnancyVisualizer />
        <BestSeller />
        <LimitedOffers />
        <FeaturesNew />
        <ProductsGeneral />
        <ProductsFlashSale />
        <ProductsDiscounted />
        <PregnancyJourney />
        <Products />
        <CommunityBlog />
        <ReviewsNew />
        <Community />
        <SizeGuide />
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <AuthModalNew />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        <FavoritesDrawer open={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
        <LiveSupport />
      </div>
    </ShopProvider>
  );
}

export default App;