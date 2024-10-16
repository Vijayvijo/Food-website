import React from 'react';
import './Gallery.css'; // Import custom CSS
import { useCart } from './CartContext'; // Import the CartContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Gallery = () => {
  const { addToCart } = useCart(); // Destructure addToCart from the CartContext
  const navigate = useNavigate(); // Get the navigate function

  const galleryItems = [
    {
      id: 1,
      imgSrc: "https://culinaryshades.com/wp-content/uploads/2021/09/Salted-Caramel-IC-sqr.jpg",
      title: "Caramel Ice-Cream",
      description: "Join us for a delightful treat! Indulge in our luscious caramel ice cream, a symphony of sweetness waiting to satisfy your cravings.",
      price: 150 // Example price
    },
    {
      id: 2,
      imgSrc: "https://img.freepik.com/premium-photo/photo-delicious-yummy-tasty-cup-cakes-isolated-white-background_763111-26261.jpg",
      title: "Cup Cakes",
      description: "Join us for a taste of heaven! Our exquisite cupcakes, adorned with intricate designs and irresistible flavors, promise pure indulgence.",
      price: 200
    },
    {
      id: 3,
      imgSrc: "/image/brownie.webp",
      title: "Walnut Brownie",
      description: "Satisfy your sweet tooth with our delectable walnut brownie! Dive into layers of rich chocolate and crunchy walnuts for pure dessert bliss.",
      price: 100
    },
    {
      id: 4,
      imgSrc: "https://rocketroar.in/wp-content/uploads/2024/06/Designer.jpeg",
      title: "Chocolate Cake",
      description: "Indulge in pure chocolate ecstasy! Our sumptuous chocolate cake, moist and decadent, is a heavenly delight for all dessert enthusiasts.",
      price: 250
    },
    {
      id: 5,
      imgSrc: "/image/milkshake.webp",
      title: "Oreo Milkshake",
      description: "Craving a sweet delight? Dive into creamy indulgence with our Oreo milkshake – a blend of cookies and dreams, waiting just for you.",
      price: 120
    },
    {
      id: 6,
      imgSrc: "/image/fruit-juice.jpg",
      title: "Fruit Juice",
      description: "Experience refreshment in a glass! Savor our revitalizing fruit juice, a vibrant blend of nature's goodness to quench your thirst.",
      price: 80
    },
   
  ];

  const handleOrderNow = (item) => {
    addToCart(item); // Add item to cart
    navigate('/cart'); // Navigate to the cart
  };

  return (
    <div className="gallery" id="Gallery">
      <div className="container text-center">
        <h1 className="mb-5">
          Our <span>Gallery</span>
        </h1>
        <div className="row gallery_image_box">
          {galleryItems.map((item) => (
            <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
              <div className="gallery_image">
                <img src={item.imgSrc} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
               
                {/* Add to Cart button with navigation */}
                <button className="btn gallery_btn" onClick={() => handleOrderNow(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
