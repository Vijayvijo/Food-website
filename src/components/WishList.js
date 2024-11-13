import React from 'react';
import { useCart } from './CartContext';
import { FaRupeeSign } from 'react-icons/fa'; // Import Rupee sign from react-icons
import './wishlist.css';  // Ensure this path is correct

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useCart();

  return (
    <div className="wishlist-container">  {/* Updated class name */}
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              <img src={item.imgSrc} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3>
                <FaRupeeSign /> {item.price} {/* Using FaRupeeSign from react-icons */}
              </h3>
              <button onClick={() => removeFromWishlist(item)}>Remove from Wishlist</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
