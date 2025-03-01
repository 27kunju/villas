import React from 'react';
import './About.css'; // Ensure this file exists and has styles
const About = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <h2>Welcome to Our Villa Booking Service</h2>
        <p>
          We are dedicated to providing the best villa booking experience. Our platform
          offers a wide range of villas across various locations, ensuring you find the perfect
          place to stay for your vacation. Our team works tirelessly to make sure every detail
          is perfect, so you can relax and enjoy your stay.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide a seamless and enjoyable booking experience for our
          customers. We strive to offer the best selection of villas, outstanding customer
          service, and competitive prices.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Quality Service</li>
          <li>Integrity</li>
          <li>Innovation</li>
        </ul>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or need assistance, please feel free to reach out to us.
          We are here to help you have the best vacation experience possible.
        </p>
      </div>
    </div>
  );
};

export default About;
