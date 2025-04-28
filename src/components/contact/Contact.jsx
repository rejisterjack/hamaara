import React from 'react';
import './contact.scss';
import mapImage from '../../assets/map.png'; // Adjust path as needed

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-info-box">
          <div className="email-icon">
            {/* Envelope icon - updated with more reliable SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h1 className="contact-title">Contact us</h1>
          <p className="contact-description">
            We are always looking for ways to improve our products and 
            services. Contact us and let us know how we can help you.
          </p>
          <div className="contact-details">
            <span>contact@youtsaas.ai</span>
            <span className="separator">•</span>
            <span>+1 (800) 123 XX21</span>
            <span className="separator">•</span>
            <span>support@yoursaas.ai</span>
          </div>
        </div>
        
        <div className="map-box">
          <img src={mapImage} alt="Location Map" className="map-image" />
          <div className="map-marker">
            <div className="marker-line"></div>
            <div className="marker-dot"></div>
          </div>
          <div className="location-label">We are here</div>
        </div>
      </div>
      
      <div className="contact-right">
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="Enter your company name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Write your message here..."></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
