import React from 'react';
import './Contact.css'; // Ensure this file exists and has styles

const Contact= () => {
  return (
    <div className="contact-us-container">
      <h1>Get in Touch</h1>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i> {/* Font Awesome icon */}
          <p>Villa Premier Builder Limited</p>
          <p>New No.111, Old No.59,</p>
          <p>NPL Devi, LB Road</p>
          <p>Mumbai, India</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i> {/* Font Awesome icon */}
          <p>Phone Number: 9884199917, 9962129500</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i> {/* Font Awesome icon */}
          <p>Email ID: villaowuner@.co.in</p>
        </div>
      </div>
      <div className="enquiry-form">
        <h2>Enquire for Rent</h2>
        <form>
          <label>Your Name *</label>
          <input type="text" placeholder="Your name" required />
          <label>Email</label>
          <input type="email" placeholder="Your email" required />
          <label>Message</label>
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
