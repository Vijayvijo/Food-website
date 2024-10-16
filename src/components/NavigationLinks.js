// src/components/NavigationLinks.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const NavigationLinks = () => {
  return (
    <div>
      <Link to="/wishlist">
        <FaHeart className="me-3" />
      </Link>
      <Link to="/cart">
        <FaShoppingCart />
      </Link>
    </div>
  );
};

export default NavigationLinks;
