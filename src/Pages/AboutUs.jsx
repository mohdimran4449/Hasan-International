import { motion } from "framer-motion";
import React from "react";
import aboutImage from "/Users/mohdimran/Desktop/first project/hasan-international/src/images/PHOTO-2025-02-04-19-52-07.jpg"; // Replace with your image path
import socialImage from '/Users/mohdimran/Desktop/first project/hasan-international/src/images/SocialResponsibility.jpg';
const AboutUs = () => {
  return (
    <motion.section
      id="about-us"
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        {/* Left Section - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Right Section - About Us Content */}
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Hasan International is a family-owned leather goods manufacturer
            and exporter with a longstanding commitment to innovation in the
            leather industry. Our expertise lies in the meticulous crafting
            of high-quality leather products, sourced exclusively from
            government-approved tanneries. With a rich history and dedication to
            quality, we serve a diverse range of clients worldwide.
          </p>

          {/* Download Brochure Button */}
          <a
  href="/Broacher/Hasan International Company Profile.pdf"
  className="download-btn"
  download
>
  Download Brochure
</a>


        </div>
      </div>

      {/* Social Responsibility Section */}
      <div className="social-responsibility">
  <div className="social-container">
    <div className="social-text">
      <h2>Social Responsibility</h2>
      <p>
        We actively promote responsible living through healthy lifestyle
        choices, positive thinking, community contributions, and environmental
        stewardship.
      </p>
      <p>
        None of our remarkable accomplishments would be feasible without an
        equally remarkable culture, work environment, and space where
        innovative ideas can thrive.
      </p>
      <p>
        We achieve this through fostering a culture of inclusivity and openness,
        and a mindset of exploration and applied innovation.
      </p>
    </div>
    <div className="social-image">
      <img src={socialImage} alt="Social Responsibility" />
    </div>
  </div>
</div>


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
    </motion.section>
  );
};

export default AboutUs;
