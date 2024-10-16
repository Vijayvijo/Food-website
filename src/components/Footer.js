import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
    const [email, setEmail] = useState('');
    const contacts = [
        { id: 1, text: '+91 6382722629' },
        { id: 2, text: 'Karthikkarthikstark@gmail.com' },
        { id: 3, text: '' }
    ];

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail(''); 
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <footer>
            <div className="footer_main">
                <div className="footer_tag">
                    <h2>Food Services</h2>
                    <p>Place Orders</p>
                    <p>Fast Delivery & Takeout</p>
                    <p>Secure Payment Options</p>
                    <p>Order Tracking</p>
                    <p>Customer Reviews</p>
                    <p>Exclusive Promotions</p>
                    <p>24/7 Customer Support</p>
                    <p>Diverse Cuisine Selection</p>
                    <p>Special Dietary Options</p>
                    <p>Pre-Schedule Your Orders</p>
                </div>
                
                <div className="footer_tag">
                    <h2>Quick Links</h2>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Gallery</p>
                    <p>Order</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>FAQs</p>
                    <p>Careers</p>
                </div>
                
                <div className="footer_tag">
                    <h2>Location</h2>
                    <p>India</p>
                    <p>Italy</p>
                    <p>USA</p>
                    <p>Sri Lanka</p>
                    <p>Japan</p>
                </div>

                <div className="footer_tag">
                    <h2>Contact Us</h2>
                    {contacts.map(contact => (
                        <p key={contact.id}>{contact.text}</p>
                    ))}
                </div>

                <div className="footer_tag">
                    <h2>Stay Connected</h2>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" />
                        <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
                        <FontAwesomeIcon icon={faTwitter} aria-label="Twitter" />
                        <FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn" />
                    </div>
                </div>

                <div className="footer_tag">
                <h2>SavoryDelightsHub</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrLHjl7OnoCZ_2EM8wIr7HNcLygjZbLV7oA&s" alt="Logo" />

                </div>

                {/* Subscriber Section with updated class */}
                <div className="footer_from">
                    <h2>Subscribe to Our Newsletter</h2>
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <p className="me">
                © Designed by <span><i className="fa-solid fa-face-grin"></i> Karthik</span> | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
