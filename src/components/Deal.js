import React from 'react';
import './Deal.css';
import pizzaImage from './images/pizza.jpg';
import burgerImage from './images/burger.jpeg';
import pastaImage from './images/pasta.jpg';
import saladImage from './images/salad.png';
import sushiImage from './images/Makizushi.jpg';
// Example data for deals
const deals = [
  {
    id: 1,
    title: 'Special Pizza Deal',
    image: pizzaImage, // Replace with actual image path
    description: 'Get a large pizza with 2 toppings for only $12.99. Perfect for a family night!',
    price: '$12.99',
  },
  {
    id: 2,
    title: 'Burger Combo',
    image: burgerImage, // Replace with actual image path
    description: 'A classic burger combo with fries and a drink. Only $8.99.',
    price: '$8.99',
  },
  {
    id: 3,
    title: 'Pasta Package' ,
    image: pastaImage, // Replace with actual image path
    description: 'Enjoy our delicious pasta with garlic bread. A tasty deal at $14.99!',
    price: '$14.99',
  },
  {
    id: 4,
    title: 'Sushi Selection',
    image: sushiImage, // Replace with actual image path
    description: 'Select 6 different rolls for only $22.99. Fresh and tasty sushi!',
    price: '$22.99',
  },
  {
    id: 5,
    title: 'Sushi Selection',
    image: saladImage, // Replace with actual image path
    description: 'Select 6 different rolls for only $22.99. Fresh and tasty sushi!',
    price: '$22.99',
  },
  {
    id: 6,
    title: 'Special Pizza Deal',
    image: pizzaImage, // Replace with actual image path
    description: 'Get a large pizza with 2 toppings for only $12.99. Perfect for a family night!',
    price: '$12.99',
  },
  {
    id: 7,
    title: 'Burger Combo',
    image: burgerImage, // Replace with actual image path
    description: 'A classic burger combo with fries and a drink. Only $8.99.',
    price: '$8.99',
  },
  {
    id: 8,
    title: 'Pasta Package',
    image: pastaImage, // Replace with actual image path
    description: 'Enjoy our delicious pasta with garlic bread. A tasty deal at $14.99!',
    price: '$14.99',
  },
  {
    id: 9,
    title: 'Sushi Selection',
    image: sushiImage, // Replace with actual image path
    description: 'Select 6 different rolls for only $22.99. Fresh and tasty sushi!',
    price: '$22.99',
  },
  {
    id: 10,
    title: 'Sushi Selection',
    image: saladImage, // Replace with actual image path
    description: 'Select 6 different rolls for only $22.99. Fresh and tasty sushi!',
    price: '$22.99',
  },
];

const Deals = () => {
  return (
    <div className="deals-container">
      <h2>Our Best Deals</h2>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-item">
            <div className="deal-image">
              <img src={deal.image} alt={deal.title} />
            </div>
            <div className="deal-info">
              <h3>{deal.title}</h3>
              <p className="price">{deal.price}</p>
              <p className="deal-description">{deal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
