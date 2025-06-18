import React, { useState } from 'react';
import './DishGrid.css';
import pizzaImage from './images/pizza.jpg';
import burgerImage from './images/burger.jpeg';
import pastaImage from './images/pasta.jpg';
import saladImage from './images/salad.png';
import sushiImage from './images/Makizushi.jpg';
import SingleProduct from './ProductDetails'; // Import SingleProduct component

const DishGrid = () => {
  const [cart, setCart] = useState({});
  const [selectedDish, setSelectedDish] = useState(null); // State for selected dish

  // Example dishes (you can replace these with dynamic data from an API)
  const dishes = [
    { id: 1, title: 'Pizza', description: 'Delicious cheese pizza with a crispy crust.', price: 12.99, image: pizzaImage, rating: 4 },
    { id: 2, title: 'Burger', description: 'Juicy beef burger with fresh vegetables.', price: 9.99, image: burgerImage, rating: 5 },
    { id: 3, title: 'Pasta', description: 'Creamy pasta with a flavorful sauce.', price: 14.99, image: pastaImage, rating: 3 },
    { id: 4, title: 'Salad', description: 'Fresh salad with a tangy dressing.', price: 8.99, image: saladImage, rating: 4 },
    { id: 5, title: 'Sushi', description: 'Delicious sushi rolls with fresh fish.', price: 15.99, image: sushiImage, rating: 5 },
    { id: 6, title: 'Pizza', description: 'Delicious cheese pizza with a crispy crust.', price: 12.99, image: pizzaImage, rating: 4 },
    { id: 7, title: 'Burger', description: 'Juicy beef burger with fresh vegetables.', price: 9.99, image: burgerImage, rating: 5 },
    { id: 8, title: 'Pasta', description: 'Creamy pasta with a flavorful sauce.', price: 14.99, image: pastaImage, rating: 3 },
    { id: 9, title: 'Salad', description: 'Fresh salad with a tangy dressing.', price: 8.99, image: saladImage, rating: 4 },
    { id: 10, title: 'Sushi', description: 'Delicious sushi rolls with fresh fish.', price: 15.99, image: sushiImage, rating: 5 },
    // Add more dishes as needed...
  ];

  // Handle adding/removing from cart
  const updateCart = (id, action) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (action === 'add') {
        updatedCart[id] = (updatedCart[id] || 0) + 1;
      } else if (action === 'remove' && updatedCart[id] > 0) {
        updatedCart[id] -= 1;
      }
      return updatedCart;
    });
  };

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆');
    }
    return stars.join(' ');
  };

  // Function to select a dish
  const selectDish = (dish) => {
    setSelectedDish(dish);  // Update the selected dish
  };

  // If there's a selected dish, show the SingleProduct component, else display the grid
  return (
    <div>
     

      {selectedDish ? (
        
        <SingleProduct
  dish={selectedDish || {}}
  setSelectedDish={setSelectedDish}
  updateCart={updateCart}
  cart={cart}
/>

      ) : (
        <div className="dish-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-container" onClick={() => selectDish(dish)}>
              <img src={dish.image} alt={dish.title} className="dish-image" />
              <div className="dish-info">
                <h3 className="dish-title">{dish.title}</h3>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-price">${dish.price.toFixed(2)}</p>
                <div className="dish-rating">{renderStars(dish.rating)}</div>

                <div className="cart-controls">
                  <button onClick={() => updateCart(dish.id, 'remove')}>-</button>
                  <span>{cart[dish.id] || 0}</span>
                  <button onClick={() => updateCart(dish.id, 'add')}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DishGrid;
