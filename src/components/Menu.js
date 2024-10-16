import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Menu.css';

const Menu = () => {
  const { addToCart, addToWishlist } = useCart();

  const menuItems = [
    {
      imgSrc: "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/10-Famous-Italian-Dishes-You-Must-Try-Lasagne-alla-Bolognese.jpg",
      title: "Lasagne alla Bolognese",
      description: "Lasagna Alla Bolognese is a rich, layered pasta dish with beef bolognese, béchamel sauce, and cheese.",
      price: "400.00",
    },
    {
      imgSrc: "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Top-Italian-Dishes-Fettuccine-al-Pomodoro.jpg",
      title: "Fettuccine al Pomodoro",
      description: "Pomodoro is a classic Italian dish with a fresh tomato and basil sauce, offering a light and vibrant flavor.",
      price: "800.00",
    },
    {
      imgSrc: "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Pizza-Margherita.jpg",
      title: "Pizza Margherita",
      description: "Pizza Margherita is a classic dish featuring a simple combination of tomato sauce and buffalo mozzarella cheese.",
      price: "650.00",
    },
    {
      imgSrc: "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Vitello-Tonnato.jpg",
      title: "Vitello Tonnato",
      description: "Vitello tonnato is a chilled veal dish served with a creamy tuna sauce and a hint of lemon, perfect as a light summer antipasto.",
      price: "500.00",
    },
    {
      imgSrc: "https://www.blueosa.com/wp-content/uploads/2020/07/butter-chicken-Chicken-Makhani.jpg",
      title: "Chicken Makhani",
      description: "Butter chicken is tender chicken in a creamy spiced tomato sauce, traditionally cooked in a tandoor.",
      price: "250.00",
    },
    {
      imgSrc: "https://www.blueosa.com/wp-content/uploads/2020/07/garlic-naam.jpg",
      title: "Naan (Flatbread)",
      description: "This bread is a perfect blend of chewy, crispy, buttery, and garlicky, ideal for balancing bold Indian flavors.",
      price: "250.00",
    },
    {
      imgSrc: "https://www.blueosa.com/wp-content/uploads/2020/07/Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg",
      title: "Matar Paneer",
      description: "Matar Paneer is a flavorful North Indian dish made with soft paneer and peas cooked in a spiced tomato-onion gravy.",
      price: "350.00",
    },
    {
      imgSrc: "https://imagevars.gulfnews.com/2022/01/20/A-pot-of-mutton-biryani_17e76ddd761_original-ratio.jpg",
      title: "Awadhii Biryani",
      description: "Awadhi Biryani is a fragrant rice dish from Lucknow, made with marinated meat, aromatic spices, and saffron.",
      price: "350.00",
    },
    {
      imgSrc: "https://amazingfoodanddrink.com/wp-content/uploads/2023/12/Depositphotos_78270946_XL.webp",
      title: "Hunan Cuisine",
      description: "Hunan Cuisine, known for its bold flavors, is popular in Hunan Province and around the world.",
      price: "500.00",
    },
    {
      imgSrc: "https://amazingfoodanddrink.com/wp-content/uploads/2023/12/Depositphotos_62193243_XL.webp",
      title: "Shandong Cuisine",
      description: "Shandong cuisine, or Lu cuisine, is China's oldest culinary tradition, renowned for its authentic flavors and 2,500-year history.",
      price: "450.00",
    },
    {
      imgSrc: "https://amazingfoodanddrink.com/wp-content/uploads/2023/12/Depositphotos_514450192_XL.webp",
      title: "Zhejiang cuisine",
      description: "Zhejiang cuisine prioritizes fresh seafood and seasonal vegetables, with chefs carefully selecting their ingredients.",
      price: "750.00",
    },
    {
      imgSrc: "https://amazingfoodanddrink.com/wp-content/uploads/2023/12/Depositphotos_140016750_XL.webp",
      title: "Fujian Cuisine",
      description: "Fujian cuisine is known for its fresh, light, and non-greasy dishes made with rich ingredients and precise cutting techniques.",
      price: "450.00",
    },
    {
      imgSrc: "https://sweetysecret.wordpress.com/wp-content/uploads/2013/08/12.jpg",
      title: "Tiramisu",
      description: "Mix a simple batter, sprinkle with cocoa and sugar, pour boiling water on top, and bake for a rich, self-saucing chocolate pudding.",
      price: "400.00",
    },
    {
      imgSrc: "https://sweetysecret.wordpress.com/wp-content/uploads/2013/08/21.jpg?w=300",
      title: "Baklava",
      description: "Baklava is a rich, sweet pastry made of layers of phyllo dough filled with chopped nuts and sweetened with syrup or honey.",
      price: "800.00",
    },
    {
      imgSrc: "https://sweetysecret.wordpress.com/wp-content/uploads/2013/08/9.jpg?w=300&h=295",
      title: "Nanaimo Bars",
      description: "Nanaimo bars are a no-bake dessert with a crumb base, topped with vanilla or custard-flavored icing and melted chocolate.",
      price: "650.00",
    },
    {
      imgSrc: "https://sweetysecret.wordpress.com/wp-content/uploads/2013/08/10.jpg",
      title: "Creme Brulee",
      description: "Crème brûlée is a dessert made of a rich custard base topped with a hard caramel layer, typically flavored with vanilla.",
      price: "500.00",
    },
    {
      imgSrc: "https://www.tasteofhome.com/wp-content/uploads/2019/06/pomegranate-juice-2.jpg?fit=700,700",
      title: "Pomegranate Juice",
      description: "Pomegranate juice is rich in antioxidants, vitamins, and anti-inflammatory properties, making it beneficial for heart health.",
      price: "250.00",
    },
    {
      imgSrc: "https://www.tasteofhome.com/wp-content/uploads/2019/03/shutterstock_431908132-lemon-water.jpg?fit=700,700",
      title: "Lemon Water",
      description: "Starting your day with lemon water boosts immunity with vitamin C and promotes hydration due to its refreshing taste.",
      price: "250.00",
    },
    {
      imgSrc: "https://www.tasteofhome.com/wp-content/uploads/2018/11/coconut-water.jpg?fit=700,700",
      title: "Coconut Water",
      description: "Coconut water is a hydrating drink rich in potassium, supporting heart health and blood pressure regulation.",
      price: "350.00",
    },
    {
      imgSrc: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Vanilla-Almond-Hot-Cocoa_EXPS_HPBZ16_38613_D05_25_1b.jpg?fit=700,700",
      title: "Hot Chocolate",
      description: "Hot chocolate made with milk is a nutritious treat, combining the antioxidants of cacao with calcium and vitamin D.",
      price: "350.00",
    },
    {
      imgSrc: "https://imgmediagumlet.lbb.in/media/2023/05/6450edb5ec8bea019082b8ec_1683025333261.jpg?fm=webp&w=750&h=500&dpr=1",
      title: "Lakeview Milk Bar",
      description: "The Lakeview Milk Bar is a cozy, vintage-style café offering a delightful selection of milkshakes, desserts, and light bites.",
      price: "500.00",
    },
    {
      imgSrc: "https://imgmediagumlet.lbb.in/media/2023/05/6450f265ec8bea019082bf01_1683026533145.jpg?fm=webp&w=750&h=500&dpr=1",
      title: "Ibaco",
      description: "Ibaco is a popular ice cream chain offering a diverse range of unique flavors and customizable desserts, including scoops.",
      price: "450.00",
    },
    {
      imgSrc: "https://imgmediagumlet.lbb.in/media/2023/05/6450edb4ec8bea019082b8e3_1683025332606.jpg?fm=webp&w=750&h=500&dpr=1",
      title: "Gelato Factory",
      description: "Gelato Factory offers a delightful range of handcrafted gelatos made from the finest ingredients, blending authentic flavors.",
      price: "750.00",
    },
    {
      imgSrc: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/2580e562-9168-45f4-8347-43fdb49ffd8f/66d490f6-ecee-4b2b-83d0-83f2856da044.png",
      title: "Art Delight Ice Cream",
      description: "A savory Indian dish featuring boiled eggs immersed in a rich, spiced tomato-based gravy.",
      price: "450.00",
    },
  
    // Add other menu items here...
  ];

  return (
    <div className="menu" id="Menu">
      <h1>Our <span>Menu</span></h1>
      <div className="menu_box">
        {menuItems.map((item, index) => (
          <MenuCard
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

const MenuCard = ({ imgSrc, title, description, price, onAddToCart, onAddToWishlist }) => {
  const [rating, setRating] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isInCart, setIsInCart] = React.useState(false);
  const navigate = useNavigate();

  const handleRatingClick = (index) => {
    setRating(index + 1 === rating ? 0 : index + 1);
  };

  const handleHeartClick = () => {
    onAddToWishlist({ title, imgSrc, description, price });
    setIsClicked(!isClicked);
  };

  const handleAddToCart = () => {
    onAddToCart({ title, imgSrc, description, price });
    setIsInCart(true);
    alert(`${title} has been added to your cart.`);
    navigate('/cart');
  };

  const handleRemoveFromCart = () => {
    // Implement the logic for removing the item from the cart
    setIsInCart(false);
    alert(`${title} has been removed from your cart.`);
  };

  return (
    <div className="menu_card">
      <div className="menu_image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="small_card">
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon"
          onClick={handleHeartClick}
          style={{ color: isClicked ? 'red' : 'gray' }}
        />
      </div>
      <div className="menu_info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>
          <FontAwesomeIcon icon={faIndianRupeeSign} /> {price}
        </h3>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`star ${index < rating ? 'checked' : ''}`}
              onClick={() => handleRatingClick(index)}
            />
          ))}
          <p className={`rating-text ${rating > 0 ? 'updated' : ''}`}>Your rating: {rating}</p>
        </div>
        {isInCart ? (
          <button onClick={handleRemoveFromCart} className="menu_btn">
            Remove from Cart
          </button>
        ) : (
          <button onClick={handleAddToCart} className="menu_btn">
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
