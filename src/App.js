import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Review from './components/Review';
import Cart from './components/Cart';
import Wishlist from './components/WishList';
import Order from './components/Order'; 
import Footer from './components/Footer';
import Login from './components/Login';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          {/* Navbar Component */}
          <Navbar />

          {/* Define Routes for Navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order" element={<Order />} /> {/* Ensure this matches your component */}
            <Route path="/review" element={<Review />} /> {/* Add Review Route */}
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} /> {/* Ensure this matches exactly */}
                    
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
