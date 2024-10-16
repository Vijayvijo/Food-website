import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
const Home = () => {
  return (
    <>
      {/* Carousel Section */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Images and Content */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="\image\logoslider1.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Our Food Shop</h5>
              <p>Explore our delicious menu and offers.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="\image\logoslider2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>High Quality Ingredients</h5>
              <p>Only the freshest ingredients used for our dishes.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="\image\logoslider3.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Order Online</h5>
              <p>Experience the convenience of ordering from your home.</p>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Header Section */}
      <header className="header text-center bg-dark text-white py-5b " >
        <div className="container">
          <h1 className="display-4">Discover Delicious Food</h1>
          <p className="lead">
            Explore a wide variety of cuisines and dishes that tantalize your taste buds.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="features py-5">
  <div className="container">
    <div className="row text-center">
      <div className="col-md-4">
        <div
          className="card feature-card mb-4 shadow-sm"
          onClick={() => window.location.href = '/menu'}
          style={{ cursor: 'pointer' }} // Optional: adds pointer cursor on hover
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/381/6/505/pizza-4k-hd-amazing-wallpaper-preview.jpg"
            alt="Italian Cuisine"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">Italian Cuisine</h3>
            <p className="card-text">
              Experience authentic Italian flavors with a selection of pastas, pizzas, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="card feature-card mb-4 shadow-sm"
          onClick={() => window.location.href = '/menu'}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://media.istockphoto.com/id/1250567402/photo/table-top-view-of-indian-food.jpg?s=612x612&w=0&k=20&c=pyL7bJn4SSYuMJnBO4zBoX5vFONZTHRBt-M70DZAjk8="
            alt="Indian Cuisine"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">Indian Cuisine</h3>
            <p className="card-text">
              Savor the rich and aromatic spices of traditional Indian dishes like biryani, curry, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="card feature-card mb-4 shadow-sm"
          onClick={() => window.location.href = '/menu'}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://img.freepik.com/free-photo/top-view-hotpot-dishes_23-2149563784.jpg?size=626&ext=jpg&ga=GA1.1.1635055214.1726115798&semt=ais_hybrid"
            alt="Chinese Cuisine"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">Chinese Cuisine</h3>
            <p className="card-text">
              Enjoy a fusion of flavors with our range of dumplings, noodles, and stir-fried specialties.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Food Section */}
    <div className="row text-center">
      <div className="col-md-4">
        <div
          className="card feature-card mb-4 shadow-sm"
          onClick={() => window.location.href = '/menu'}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/476/612/27/dessert-4k-hd-background-image-wallpaper-preview.jpg"
            alt="Desserts"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">Desserts</h3>
            <p className="card-text">
              Indulge in a variety of sweet treats including cakes, pastries, and traditional desserts.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="card feature-card mb-4 shadow-sm"
          onClick={() => window.location.href = '/menu'}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://img.freepik.com/free-photo/glass-juice-with-different-juices-wooden-table_1340-34985.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid"
            alt="Beverages"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">Beverages</h3>
            <p className="card-text">
              Quench your thirst with refreshing drinks, smoothies, and a variety of teas and coffees.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="card feature-card mb-4 shadow-sm"
          onClick={() => window.location.href = '/menu'}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/409/669/250/food-ice-cream-close-up-colors-wallpaper-preview.jpg"
            alt="Ice Cream"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">Ice Cream</h3>
            <p className="card-text">
              Indulge in a variety of ice cream flavors that are perfect for any occasion.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

    </>
  );
};

export default Home;
