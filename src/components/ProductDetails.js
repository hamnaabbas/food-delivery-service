import React from 'react';
import './ProductDetails.css'; // Create styles for SingleProduct

const SingleProduct = ({ dish, setSelectedDish, updateCart, cart }) => {
  if (!dish) {
    return <p>No product selected</p>; // Or return null if you don't want to render anything.
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆');
    }
    return stars.join(' ');
  };

  const closeProduct = () => {
    setSelectedDish(null);
  };

  return (
    <div className="single-product">
      <div className="product-detail">
        <button onClick={closeProduct} className="close-button">
          Close
        </button>
        <div className="product-image">
          <img src={dish.image} alt={dish.title} />
        </div>
        <div className="product-info">
          <h2>{dish.title}</h2>
          <p>{dish.description}</p>
          <p>
            <strong>Price:</strong> ${dish.price.toFixed(2)}
          </p>
          <p>
            <strong>Rating:</strong> {renderStars(dish.rating)}
          </p>
          <p>
            <strong>Ingredients:</strong> {dish.ingredients?.join(', ') || 'N/A'}
          </p>

          <div className="cart-controls">
            <button onClick={() => updateCart(dish.id, 'remove')}>-</button>
            <span>{cart[dish.id] || 0}</span>
            <button onClick={() => updateCart(dish.id, 'add')}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;