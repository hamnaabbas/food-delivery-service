// AboutUs.js
import React from "react";
import "./aboutUs.css"; // For styling the component
import man1 from './images/man-suit-with-white-shirt-black-tie_905510-3629.avif';
import man2 from './images/OIP1.jpeg';
import man3 from './images/OIP.jpeg';
import FindUs from './FindUs';
// Google Map Component
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";  // npm install @react-google-maps/api
import Main from './Main';
const AboutUs = () => {
  // Company Location (adjust to your actual business location)
  //const location = {
  //  lat: 40.748817, // Latitude
  //  lng: -73.985428, // Longitude
  //};

  return (
    <div className="about-us">
      <Main/>
      <section className="intro-section">
        <h1>About Us</h1>
        <p>
          Welcome to Food Delivery Service, your trusted partner in bringing the
          best food to your doorstep. We offer a wide variety of cuisines, and
          our mission is to make food delivery as fast and easy as possible. 
          With a focus on quality service, we promise to deliver delicious meals
          straight to your home with care and efficiency.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We aim to bring people together with great food and fast delivery.
          Our core values of integrity, excellence, and customer satisfaction
          ensure that you receive the highest quality service every time. We're
          dedicated to making your dining experience exceptional, whether it's
          lunch, dinner, or a special event.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Fast and reliable delivery service</li>
          <li>Wide range of cuisines to choose from</li>
          <li>24/7 customer support</li>
          <li>Easy online ordering via our app or website</li>
          <li>Delivery tracking in real-time</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={man1} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>With over 10 years in the food industry, John leads our team with a passion for delivering excellence and innovation.</p>
          </div>
          <div className="team-member">
            <img src={man2} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
            <p>Jane ensures smooth operations and handles logistics to maintain the speed and quality of our deliveries.</p>
          </div>
          <div className="team-member">
            <img src={man3} alt="Team Member 3" />
            <h3>Mark Wilson</h3>
            <p>Head of Customer Service</p>
            <p>Mark and his team are always available to assist customers and ensure complete satisfaction with every order.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We are always here to help! For inquiries, please contact us:
        </p>
        <ul>
          <li>Phone: (123) 456-7890</li>
          <li>Email: support@yourcompany.com</li>
          <li>Address: 123 Food Street, YourCity, Country</li>
        </ul>
      </section>
<FindUs/>
      <section className="map-section">
        <h2>Find Us</h2>
       
      </section>
    </div>
  );
};

export default AboutUs;
