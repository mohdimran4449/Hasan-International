import { motion } from "framer-motion";
import React from "react";
import socialVideo from '/Users/mohdimran/Desktop/first project/hasan-international/src/images/SocialResponsibility.mp4';

const SocialResponsibility = () => {
  return (
    <motion.div 
      className="social-responsibility"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="social-video-container">
        <video autoPlay loop muted className="social-background-video">
          <source src={socialVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="social-content-overlay">
          <div className="social-text">
            <h2>CSR &<br />Sustainability</h2>
            <p>
              We actively promote responsible living through healthy lifestyle
              choices, positive thinking, community contributions, and environmental
              stewardship.
              None of our remarkable accomplishments would be feasible without an
              equally remarkable culture, work environment, and space where
              innovative ideas can thrive.
            
              We achieve this through fostering a culture of inclusivity and openness,
              and a mindset of exploration and applied innovation.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialResponsibility;
