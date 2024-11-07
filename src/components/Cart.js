import React, { useState } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  
  // Calculate itemTotal from cartItems in your CartContext
  const itemTotal = cartItems.reduce((total, item) => total + (Number(item.price) || 0), 0);
  const deliveryFee = 35; // Fixed fee for this example
  const platformFee = 7.00;
  const gst = (itemTotal + deliveryFee + platformFee) * 0.18; // 18% GST
  const [tip, setTip] = useState(0); // Tip amount, can be updated by user
  const [orderPlaced, setOrderPlaced] = useState(false); // Track order status

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleTipChange = (e) => {
    const value = Number(e.target.value);
    setTip(isNaN(value) ? 0 : value); // Ensure the tip is a valid number
  };

  // Ensure all values are numbers and calculate the total amount
  const totalAmount = itemTotal + deliveryFee + platformFee + gst + (Number(tip) || 0);

  // Handle the "Buy" action and show order confirmation
  const handleBuy = () => {
    // Set orderPlaced to true to display the order confirmation
    setOrderPlaced(true);
    
    // Show alert with the order details when the order is placed
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
    
    alert(orderSummary); // Displaying the alert
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
                    <FontAwesomeIcon icon={faIndianRupeeSign} /> {item.price}
                  </h3>
                </div>
              </li>
            ))}
          </ul>

          {/* Bill Details */}
          <div className="bill-details">
            <p>Item Total: <FontAwesomeIcon icon={faIndianRupeeSign} /> {itemTotal.toFixed(2)}</p>
            <p>Delivery partner fee: <FontAwesomeIcon icon={faIndianRupeeSign} /> {deliveryFee}</p>
            <p>Platform fee: <FontAwesomeIcon icon={faIndianRupeeSign} /> {platformFee}</p>
            <p>GST and Restaurant Charges: <FontAwesomeIcon icon={faIndianRupeeSign} /> {gst.toFixed(2)}</p>
            <p>Delivery Tip: <FontAwesomeIcon icon={faIndianRupeeSign} /> {tip}</p>
            <h3>Total Amount: <FontAwesomeIcon icon={faIndianRupeeSign} /> {totalAmount.toFixed(2)}</h3>
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
                        <FontAwesomeIcon icon={faIndianRupeeSign} /> {item.price}
                      </h3>
                      <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bill details */}
              <div className="bill-details">
                <h2>Bill Details</h2>
                <p>Item Total: <FontAwesomeIcon icon={faIndianRupeeSign} /> {itemTotal.toFixed(2)}</p>
                <p>Delivery partner fee: <FontAwesomeIcon icon={faIndianRupeeSign} /> {deliveryFee}</p>
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
                <p>Platform fee: <FontAwesomeIcon icon={faIndianRupeeSign} /> {platformFee}</p>
                <p>GST and Restaurant Charges: <FontAwesomeIcon icon={faIndianRupeeSign} /> {gst.toFixed(2)}</p>
                <h3>TO PAY: <FontAwesomeIcon icon={faIndianRupeeSign} /> {totalAmount.toFixed(2)}</h3>
              </div>

              {/* Buy button */}
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
