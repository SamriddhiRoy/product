'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, newQty: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

 
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

 
  const updateQuantity = (id: number, newQty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item
      )
    );
  };

 
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
