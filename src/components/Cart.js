import React, { useState } from 'react';
import { useCart } from './CartContext';
import { FaRupeeSign } from 'react-icons/fa'; // Importing from react-icons
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const itemTotal = cartItems.reduce((total, item) => total + (Number(item.price) || 0), 0);
  const deliveryFee = 35; 
  const platformFee = 7.00;
  const gst = (itemTotal + deliveryFee + platformFee) * 0.18;
  const [tip, setTip] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleTipChange = (e) => {
    const value = Number(e.target.value);
    setTip(isNaN(value) ? 0 : value);
  };

  const totalAmount = itemTotal + deliveryFee + platformFee + gst + (Number(tip) || 0);

  const handleBuy = () => {
    setOrderPlaced(true);
    const orderSummary = `
      Order Placed Successfully!
      \n\nOrder Details:
      Item Total: ₹${itemTotal.toFixed(2)}
      Delivery Fee: ₹${deliveryFee}
      Platform Fee: ₹${platformFee}
      GST and Charges: ₹${gst.toFixed(2)}
      Delivery Tip: ₹${tip}
      \n\nTotal Amount: ₹${totalAmount.toFixed(2)}
    `;
    alert(orderSummary);
  };

  return (
    <div className="cart-container"> 
      <h1>Your Cart</h1>
      {orderPlaced ? (
        <div className="order-confirmation">
          <h2>Order Confirmation</h2>
          <p>Your order has been successfully placed!</p>
          <h3>Order Summary:</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="order-item">
                <img src={item.imgSrc} alt={item.title} className="item-img"/>
                <div className="item-details">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <h3>
                    <FaRupeeSign /> {item.price}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
          <div className="bill-details">
            <p>Item Total: <FaRupeeSign /> {itemTotal.toFixed(2)}</p>
            <p>Delivery partner fee: <FaRupeeSign /> {deliveryFee}</p>
            <p>Platform fee: <FaRupeeSign /> {platformFee}</p>
            <p>GST and Charges: <FaRupeeSign /> {gst.toFixed(2)}</p>
            <p>Delivery Tip: <FaRupeeSign /> {tip}</p>
            <h3>Total Amount: <FaRupeeSign /> {totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.imgSrc} alt={item.title} className="item-img"/>
                    <div className="item-details">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <h3>
                        <FaRupeeSign /> {item.price}
                      </h3>
                      <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bill-details">
                <h2>Bill Details</h2>
                <p>Item Total: <FaRupeeSign /> {itemTotal.toFixed(2)}</p>
                <p>Delivery partner fee: <FaRupeeSign /> {deliveryFee}</p>
                <div className="tip-section">
                  <label htmlFor="tip">Delivery Tip: </label>
                  <input 
                    type="number" 
                    id="tip" 
                    value={tip} 
                    onChange={handleTipChange} 
                    placeholder="Add tip" 
                  />
                </div>
                <p>Platform fee: <FaRupeeSign /> {platformFee}</p>
                <p>GST and Charges: <FaRupeeSign /> {gst.toFixed(2)}</p>
                <h3>TO PAY: <FaRupeeSign /> {totalAmount.toFixed(2)}</h3>
              </div>
              <div className="buy-section">
                <button onClick={handleBuy} className="buy-button">Buy Now</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
