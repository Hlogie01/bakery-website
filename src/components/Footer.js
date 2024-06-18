import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: contact@Hlogiconfectioneries.com</p>
        <p>Phone: (+27) 111-2222</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="social-media">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://github.com/Hlogie01" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Location</h4>
        <p>24 Sesame Street</p>
        <p>Johannesburg, South Africa</p>
      </div>
    </div>
    <p>&copy; 2024 Hlogi's Confectioneries. All rights reserved.</p>
  </footer>
);

export default Footer;
