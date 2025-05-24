import { motion } from "framer-motion";
import React from "react";
import styles from "./PetSupplies.module.css"; // Updated import path

// Import images
import Care from './LeatherBagsImages/Care.jpg';
import Cloth from './LeatherBagsImages/Cloth.jpeg';
import FoodTreats from './LeatherBagsImages/FoodTreats.jpg';
import Toys from './LeatherBagsImages/Toys.jpg';

const products = [
  { src: Cloth, name: "Clothing & Accessories" },
  { src: FoodTreats, name: "Food & Treats" },
  { src: Toys, name: "Toys & Training Equipment" },
  { src: Care, name: "Care & Grooming" },
];

const PetSupplies = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    // Use a relative URL to reference the PDF in the public folder
    link.href = "/Broacher/Hasan%20international%20Pet%20Supplies%20catalog.pdf";
    link.download = "Hasan International Pet Supplies.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className={styles.servicePage} // Applied CSS module
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.serviceContainer}>
        <h1 className={styles.artisanHeading}>Pet Supplies</h1>
        <div className={styles.artisanDescriptionContainer}>
          <p className={styles.artisanDescription}>
          At Hasan International, we are committed to providing a comprehensive selection of meticulously curated accessories and essentials designed to enhance the well-being and aesthetics of your canine companions. We offer a wide variety of dog and cat food formulated to cater to the nutritional requirements of pets at various life stages, complemented by delectable treats that elevate training and reward moments. Quality is the cornerstone of our offerings. Each product in our catalog is meticulously crafted or sourced with the utmost regard for safety, comfort, and durability.
          </p>
        </div>

        {/* Articles Section with Centered Underline */}
        <motion.h2 className={styles.articlesHeading}>Articles</motion.h2>
        <div className={styles.articlesGallery}>
          {products.map((product, index) => (
            <motion.div key={index} className={styles.articleItem}>
              <motion.img
                src={product.src}
                alt={product.name}
                className={styles.articleImage}
                whileHover={{ scale: 1.08 }}
              />
              <p className={styles.articleName}>{product.name}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </motion.div>
  );
};

export default PetSupplies;
