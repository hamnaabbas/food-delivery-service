import React, { useState, useEffect } from 'react';
import './Main.css';

// Import images
import pizzaImage from './images/pizza.jpg';
import burgerImage from './images/burger.jpeg';
import pastaImage from './images/pasta.jpg';
import saladImage from './images/salad.png';
import sushiImage from './images/Makizushi.jpg';

const Main = () => {
  const [position, setPosition] = useState(0);

  // Images for the slides
  const slides = [
    { id: 1, title: 'Pizza', image: pizzaImage },
    { id: 2, title: 'Burger', image: burgerImage },
    { id: 3, title: 'Pasta', image: pastaImage },
    { id: 4, title: 'Salad', image: saladImage },
    { id: 5, title: 'Sushi', image: sushiImage },
  ];

  // Auto slide every 2 seconds using useEffect to control position
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % slides.length); // Auto slide with wrapping around
    }, 2000); // Change slide every 2 seconds

    return () => {
      clearInterval(interval); // Clean up interval when component unmounts
    };
  }); // Trigger when component mounts and interval is set

  const slideLeft = () => {
    if (position < slides.length - 1) {
      setPosition(position + 1);
    }
  };
  const slideRight = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <div className="main-container">
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(${position * -100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item">
              <div className="image-container">
                <img src={slide.image} alt={slide.title} />
                <div className="overlay">
                  <h2>{slide.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="arrows">
        <button className="arrow left" onClick={slideLeft}>←</button>
        <button className="arrow right" onClick={slideRight}>→</button>
      </div>
    </div>
  );
};

export default Main;
