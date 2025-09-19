import React, { useState } from 'react';
import Header from './components/Header';
import HeroNew from './components/HeroNew';
import PregnancyVisualizer from './components/PregnancyVisualizer';
import FeaturesNew from './components/FeaturesNew';
import PregnancyJourney from './components/PregnancyJourney';
import Products from './components/Products';
import ReviewsNew from './components/ReviewsNew';
import LiveOrders from './components/LiveOrders';
import Community from './components/Community';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import BestSeller from './components/BestSeller';
import LimitedOffers from './components/LimitedOffers';
import ProductsGeneral from './components/ProductsGeneral';
import ProductsFlashSale from './components/ProductsFlashSale';
import ProductsDiscounted from './components/ProductsDiscounted';
import MomsCalendar from './components/MomsCalendar';
import { ShopProvider } from './context/ShopContext';
import AuthModalNew from './components/AuthModalNew';
import CartDrawer from './components/CartDrawer';
import FavoritesDrawer from './components/FavoritesDrawer';
import Contact from './components/Contact';
import SizeGuide from './components/SizeGuide';
import CommunityBlog from './components/CommunityBlog';
import LiveSupport from './components/LiveSupport';
import CommunityRewardsAnnouncement from './components/CommunityRewardsAnnouncement';
import BellyCoinsAnnouncement from './components/BellyCoinsAnnouncement';

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
        <MomsCalendar />
        <ProductsGeneral />
        <ProductsFlashSale />
        <ProductsDiscounted />
        <PregnancyJourney />
        <Products />
        <CommunityBlog />
        <ReviewsNew />
        <LiveOrders />
        <Community />
        <SizeGuide />
        <Contact />
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <AuthModalNew />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        <FavoritesDrawer open={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
        <LiveSupport />
        <CommunityRewardsAnnouncement />
        <BellyCoinsAnnouncement />
      </div>
    </ShopProvider>
  );
}

export default App;