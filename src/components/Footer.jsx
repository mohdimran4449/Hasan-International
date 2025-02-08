import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa"; // Added FaEnvelope for Gmail icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          {/* Social Media Icons */}
          {/* Gmail Icon */}
          <a href="mailto:info@hasanintl.in" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; 2023 Hasan International. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
