import { motion } from "framer-motion";
import React from "react";
import heroImage from "/Users/mohdimran/Desktop/first project/hasan-international/src/images/hero.jpg";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-container">
        <div className="hero-image-container">
          <img src={heroImage} alt="Hasan International" className="hero-image" />
          <div className="hero-mobile-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hasan<br />International
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Hasan International is a reliable leather goods production house that consistently crafts high-quality products for our esteemed partners across the world.
            </motion.p>
          <motion.a
            href="#/about-us" // Changed to About Us page link
            className="about-btn" // Renamed class for clarity
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
