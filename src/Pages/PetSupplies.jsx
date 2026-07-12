import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import styles from "./PetSupplies.module.css"; // Updated import path
import DryKibble from "./PetFoodImages/DryKibble.jpeg";
import DehydratedTreats from "./PetFoodImages/DehydratedNaturalTreat.jpeg";
import RawhideTreats from "./PetFoodImages/RawhideTreats.jpeg";  

import PetSuppliesBrochure from "./Brochures/HI Dog Food Catalog.pdf";

const categories = [
  {
    name: "Dry Kibble Food",
    link: "/pet-supplies/dry-kibble-food",
    image: DryKibble,
  },
  {
    name: "Dehydrated Natural Treats",
    link: "/pet-supplies/dehydrated-natural-treats",
    image: DehydratedTreats,
  },
  {
    name: "Premium Rawhide Treats",
    link: "/pet-supplies/premium-rawhide-treats",
    image: RawhideTreats,
  },
];

const PetSupplies = () => {
  return (
    <motion.div
      className={styles.servicePage} // Applied CSS module
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.serviceContainer}>
        <h1 className={styles.artisanHeading}>Pet Food</h1>
        <div className={styles.artisanDescriptionContainer}>
          <p className={styles.artisanDescription}>
          At Hasan International, we are committed to providing a comprehensive selection of meticulously curated accessories and essentials designed to enhance the well-being and aesthetics of your canine companions. We offer a wide variety of dog and cat food formulated to cater to the nutritional requirements of pets at various life stages, complemented by delectable treats that elevate training and reward moments. Quality is the cornerstone of our offerings. Each product in our catalog is meticulously crafted or sourced with the utmost regard for safety, comfort, and durability.
          </p>
        </div>

        <motion.h2 className={styles.articlesHeading}>Categories</motion.h2>
        <div className="product-gallery">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className={styles.productCardLink}
            >
              <article className="product-item">
                <div className="product-image-container">
                  <div className={styles.productImagePlaceholder}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className={styles.productImage}
                    />
                  </div>
                </div>
                <div className="product-name">
                  <p>{category.name}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Download Brochure Section — below gallery, centered */}
        <div className="download-brochure-container">
          <a
            href={PetSuppliesBrochure}
            download="PetSupplies-Brochure.pdf"
            className="download-brochure-button"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PetSupplies;
