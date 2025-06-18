import React from 'react';
import './FindUs.css';

// Importing images for the grid (you can replace these with actual paths to your images)
import city1 from './images/city1.jpeg';
import city2 from './images/city2.jpg';
import city3 from './images/city3.jpeg';
import city4 from './images/city4.jpg';

const FindUs = () => {
  const cities = [
    { id: 1, name: "New York", image: city1 },
    { id: 2, name: "Los Angeles", image: city2 },
    { id: 3, name: "Chicago", image: city3 },
    { id: 4, name: "San Francisco", image: city4 },
  ];

  return (
    <div className="find-us-container">
      <h2>Find Us in the City</h2>
      <div className="grid-container">
        {cities.map((city) => (
          <div key={city.id} className="grid-item">
            <div className="image-container">
              <img src={city.image} alt={city.name} />
              <div className="overlay">
                <h3>{city.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
