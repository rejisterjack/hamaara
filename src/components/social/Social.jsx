import React from 'react';
import './social.scss';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Reduced to 6 user images as requested
const userImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/86.jpg',
  'https://randomuser.me/api/portraits/women/63.jpg',
  'https://randomuser.me/api/portraits/men/11.jpg',
  'https://randomuser.me/api/portraits/women/26.jpg'
];

const Social = () => {
  return (
    <div className="social-container">
      <div className="social-section">
        <div className="social-content">
          <div className="user-images-container">
            {userImages.map((src, index) => (
              <div key={index} className={`user-image user-${index}`}>
                <img src={src} alt={`User ${index + 1}`} />
              </div>
            ))}
          </div>
          
          <p className="trusted-text">Trusted by 20,000+ people</p>
          
          <h2 className="social-heading">Follow Us On Social Media</h2>
          
          <p className="social-description">
            We will Help You Every Steps Of The Way. Stay connected with Hamaara 
            for exclusive market insights, expert guidance
          </p>
          
          <div className="social-icons">
            <div className="icon-box">
              <FaTwitter className="social-icon" />
            </div>
            <div className="icon-box">
              <FaInstagram className="social-icon" />
            </div>
            <div className="icon-box">
              <FaLinkedin className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
