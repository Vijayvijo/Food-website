import React from 'react';
import './Review.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // React Icons for stars
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // React Icons for social media

const reviews = [
    {
        name: "Sai Revanth",
        image: "https://media.licdn.com/dms/image/v2/C5603AQGHzQz4OEmlkA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1546239490170?e=2147483647&v=beta&t=ljAxzi9UhwV21VC8KNZtc4CEI23L6ovM_u6rk-rmI6k", 
        rating: 4.5,
        text: "A good restaurant for tasty food. It is clean. Ambience and service are good. Located in Ramnagar. There is Hotel Fressotel for stay nearby. Restaurant is in the first floor. Can get coffee and snacks on the ground floor. Many shops are there",
    },
    {
        name: "Emma Brown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXxBQzD1-2PoeKFtjeU7epnBjhHtNrVKZLg&s",
        rating: 4.5,
        text: "The food was delicious and full of flavor! I especially loved the pasta – it was cooked to perfection. The presentation was beautiful, and the service was prompt. I’ll definitely be ordering from here again!"
    },
    {
        name: "David Smith",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPOFyJr_kjTyA5huONbp5bYBdrAedW2nb4g&s",
        rating: 4.5,
        text: "The meal was absolutely delightful! The burger was juicy, and the fries were crispy and perfectly seasoned. The portion sizes were generous, and the dessert was a sweet surprise. Highly recommend trying it out!"
    },
    {
        name: "",
        image: "",
        rating: 4.5,
        text: "The meal was absolutely delightful! The burger was juicy, and the fries were crispy and perfectly seasoned. The portion sizes were generous, and the dessert was a sweet surprise. Highly recommend trying it out!"
    },
    {
        name: "",
        image: "",
        rating: 4.5,
        text: "The meal was absolutely delightful! The burger was juicy, and the fries were crispy and perfectly seasoned. The portion sizes were generous, and the dessert was a sweet surprise. Highly recommend trying it out!"
    },
    {
        name: "",
        image: "",
        rating: 4.5,
        text: "The meal was absolutely delightful! The burger was juicy, and the fries were crispy and perfectly seasoned. The portion sizes were generous, and the dessert was a sweet surprise. Highly recommend trying it out!"
    },
];

const Review = () => {
    return (
        <div className="review" id="Review">
            <h1>Customer Review</h1>
            <div className="review_box">
                {reviews.map((review, index) => (
                    <div className="review_card" key={index}>
                        <div className="review_profile">
                            <img src={review.image} alt={review.name} />
                        </div>
                        <div className="review_text">
                            <h2 className="name">{review.name}</h2>
                            <div className="review_icon">
                                {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                                    <FaStar key={i} />
                                ))}
                                {review.rating % 1 !== 0 && <FaStarHalfAlt />}
                            </div>
                            <div className="review_social">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                <FaLinkedinIn />
                            </div>
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
