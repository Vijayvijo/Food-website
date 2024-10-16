import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== itemToRemove.title)
    );
  };

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  const removeFromWishlist = (itemToRemove) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.title !== itemToRemove.title)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
