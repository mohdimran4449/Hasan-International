import { motion } from "framer-motion";
import React from "react";

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
        <div className="hero-image"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hasan International
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
            href="/about-us" // Changed to About Us page link
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
