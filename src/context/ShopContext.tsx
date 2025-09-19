import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { authService, User } from '../services/authService';

export interface CartItem { id: number; name: string; price: number; image: string; qty: number; }

interface ShopContextValue {
  favorites: Set<number>;
  toggleFavorite: (id: number) => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
  favCount: number;
  isAuthOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  // Auth-related
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addToCart = (item: Omit<CartItem, 'qty'>, qty: number = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.id !== id));

  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);

  // Auth methods
  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await authService.signInWithGoogle();
      setIsAuthOpen(false);
    } catch (error) {
      console.error('Google sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithFacebook = async () => {
    setIsLoading(true);
    try {
      await authService.signInWithFacebook();
      setIsAuthOpen(false);
    } catch (error) {
      console.error('Facebook sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await authService.signInWithEmail(email, password);
      setIsAuthOpen(false);
    } catch (error) {
      console.error('Email sign in error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithEmail = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      await authService.signUpWithEmail(name, email, password);
      setIsAuthOpen(false);
    } catch (error) {
      console.error('Email sign up error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await authService.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo<ShopContextValue>(() => ({
    favorites,
    toggleFavorite,
    cart,
    addToCart,
    removeFromCart,
    cartCount: cart.reduce((s, i) => s + i.qty, 0),
    favCount: favorites.size,
    isAuthOpen,
    openAuth,
    closeAuth,
    user,
    isLoading,
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  }), [favorites, cart, isAuthOpen, user, isLoading]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
};


