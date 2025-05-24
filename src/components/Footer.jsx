import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa"; // Added FaEnvelope for Gmail icon

const Footer = () => {
  return (
    <footer className="footer">
      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          {/* Contact Us Section */}
          <div className="contact-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> info@hasanintl.in
              </p>
              <p>
                <strong>Tel:</strong> +91-9838071166
              </p>
            </div>
          </div>

          {/* Office Location Section */}
          <div className="contact-section">
            <h3>Office Location</h3>
            <div className="contact-info">
              <p>
                M 1/6, Ganga Vihar KDA Colony, Jajmau, Shiwans Tenray, Kanpur -
                208010
              </p>
            </div>
          </div>

          {/* Production Unit Section */}
          <div className="contact-section">
            <h3>Production Unit</h3>
            <div className="contact-info">
              <p>
                Plot No. 5, Katri Piper Khera Tribhwan Kheda, Unnao, Uttar
                Pradesh.
              </p>
            </div>
          </div>
        </div>
      </div>
      
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
