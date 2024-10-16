import React from "react";
import "./AboutUs.css"; 
import { FaUtensils, FaBullseye, FaUsers, FaHandHoldingHeart, FaBalanceScale, FaEnvelope } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      {/* Top Heading */}
      <h1 className="top-heading">AboutUs</h1>

      <div className="about-container">
        <div className="about-content scroll-container">
          {/* Box 1 */}
          <div className="content-box">
            <h1 className="fade-in">
              <FaUtensils className="icon" /> About Us
            </h1>
            <p className="slide-in">
              Welcome to our Food Shop! We are passionate about bringing you the best dishes,
              made with fresh and high-quality ingredients. Our chefs put a lot of care into
              every dish we create to ensure that each meal is a delightful experience for
              you.
            </p>
          </div>
          {/* Box 2 */}
          <div className="content-box">
            <h1 className="fade-in">
              <FaBullseye className="icon" /> Our Mission
            </h1>
            <p className="slide-in delay">
              Our mission is simple: to provide delicious food and exceptional service.
              Whether you're craving a quick bite or planning a meal for your family, we have
              something for everyone. Join us and enjoy a variety of delicious meals prepared
              with love!
            </p>
          </div>
          {/* Box 3 */}
          <div className="content-box">
            <h1 className="fade-in">
              <FaUsers className="icon" /> Our Team
            </h1>
            <p className="slide-in">
              Meet our talented team of chefs and staff members, who work tirelessly to bring
              you the best dining experience. Each of our team members is dedicated to
              maintaining high-quality standards and a welcoming atmosphere.
            </p>
          </div>
          {/* Box 4 */}
          <div className="content-box">
            <h1 className="fade-in">
              <FaHandHoldingHeart className="icon" /> Join Us
            </h1>
            <p className="slide-in delay">
              Want to be part of our team? We are always looking for enthusiastic individuals
              who share our passion for great food and exceptional service. Contact us for
              more information on how you can become a part of our Food Shop family!
            </p>
          </div>
          {/* Box 5 */}
          <div className="content-box">
            <h1 className="fade-in">
              <FaBalanceScale className="icon" /> Our Values
            </h1>
            <p className="slide-in">
              We believe in quality, consistency, and customer satisfaction. Every dish we
              serve is made with these values in mind, and we strive to provide an outstanding
              experience for our customers every time they visit us.
            </p>
          </div>
          {/* Box 6 */}
          <div className="content-box">
            <h1 className="fade-in">
              <FaEnvelope className="icon" /> Contact Us
            </h1>
            <p className="slide-in delay">
              Have any questions or feedback? We would love to hear from you! Reach out to us
              through our contact page or visit us in person to share your thoughts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
