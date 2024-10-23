import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext'; // Import the custom hook
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { darkMode, toggleDarkMode } = useTheme(); // Use the context
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchTerm)}`);
    }
    setSearchTerm('');
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark' : 'navbar-light'}`}
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: '1000',
        backgroundColor: darkMode ? '#343a40' : '#f8f9fa',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <div className="container-fluid">
        <div className="logo">
          <img src="/image/download.jpeg" alt="Logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/about-us">About Us</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/menu">Menu</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/gallery">Gallery</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/order">Order</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/review">Review</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/login">Login</Link></li>

            <li className="nav-item me-3">
              <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                <input 
                  type="text" 
                  className="form-control me-4" 
                  placeholder="Search.." 
                  value={searchTerm} 
                  onChange={handleInputChange} 
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/wishlist">
                <FontAwesomeIcon icon={faHeart} /> Wishlist
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-secondary" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
