import React from 'react';
import './footer.scss';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// Using a direct import path for troubleshooting
import footerImg from '../../assets/footer.png';

const Footer = () => {
  // Add console log to verify the image path
  console.log("Footer image path:", footerImg);
  
  return (
    <footer className="footer">
      <div className="footer-gradient-bg"></div>
      
      {/* Added inline style for troubleshooting */}
      <img 
        src={footerImg} 
        alt="Footer background" 
        className="footer-image" 
      />
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-title">HAMAARA</h3>
            <p className="footer-copyright">@copyright Hamarra 2024. All rights reserved.</p>
            
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaEnvelope className="footer-icon" />
                <span>invest@hamaara.com</span>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-icon" />
                <span>13s Sd, Rd RET #%) SF, QA 22182</span>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-column">
              <h4 className="footer-column-title">Socials</h4>
              <ul className="footer-list">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-list">
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="footer-large-text">Hamaara</h1>
    </footer>
  );
};

export default Footer;
