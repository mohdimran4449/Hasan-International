import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import equestrianImg from "../images/Equestrian.jpg";
import PetSupplies from "../images/PetSupplies.jpeg";
import PetAccessories from "../images/PetSupplies.jpg";

// Services data (title, image, and link)
const services = [
  { title: "Equestrian", image: equestrianImg, link: "/equestrian" },
  { title: "Pet Food", image: PetSupplies, link: "/pet-food", containImage: true },
  { title: "Pet Supplies", image: PetAccessories, link: "/pet-supplies" },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }} // Section fade-in animation
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }} // H2 fade-in with slight slide from top
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card"
            whileHover={{ scale: 1.05 }} // Hover scale effect for the card
            initial={{ opacity: 0, y: 50 }} // Initial animation for each card (fade and slide-up)
            animate={{ opacity: 1, y: 0 }} // Final state (fully visible and no slide)
            transition={{ delay: index * 0.2, duration: 0.5 }} // Animation delay for each card based on index
          >
            <Link to={service.link}>
              {service.placeholder ? (
                <div className="service-image-placeholder" aria-hidden="true">
                  Image Placeholder
                </div>
              ) : (
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className={service.containImage ? "service-image-contain" : ""}
                  whileHover={{ scale: 1.1 }} // Increase image size on hover
                  transition={{ duration: 0.3 }} // Quick transition for image scaling
                />
              )}
              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
