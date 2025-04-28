import React from 'react';
import './contact.scss';
import mapImage from '../../assets/map.png'; // Adjust path as needed

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-info-box">
          <div className="email-icon">
            {/* Envelope icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M0 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm22 4.5l-9 5.5-9-5.5V4h18v4.5zm0 2L22 18H2V10.5l9 5.5 9-5.5z"/>
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
            <input type="text" id="fullName" name="fullName" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
