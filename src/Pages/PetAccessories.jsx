import { motion } from "framer-motion";
import React from "react";
import "./Service.css";
import styles from "./PetSupplies.module.css";

import InteractiveToys from "./PetAccessoriesImages/Toys.jpg";
import FeedingEssentials from "./PetAccessoriesImages/FoodTreats.jpg";
import WalkAndWear from "./PetAccessoriesImages/Cloth.jpeg";
import CareAndTravel from "./PetAccessoriesImages/Care.jpg";

const products = [
  {
    name: "Interactive Toys",
    image: InteractiveToys,
    description:
      "Durable toys designed for enrichment, training, chewing, and everyday play across pet sizes.",
  },
  {
    name: "Feeding Essentials",
    image: FeedingEssentials,
    description:
      "Practical bowls and feeding accessories developed for stability, easy cleaning, and daily use.",
  },
  {
    name: "Walk & Wear",
    image: WalkAndWear,
    description:
      "Leashes, collars, and harness-ready accessories made with comfort, control, and brand customization in mind.",
  },
  {
    name: "Care & Travel",
    image: CareAndTravel,
    description:
      "Grooming accessories, beds, carriers, and travel products built for comfort away from home.",
  },
];

const PetAccessories = () => {
  return (
    <motion.main
      className={styles.servicePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.serviceContainer}>
        <h1 className={styles.artisanHeading}>Pet Supplies</h1>
        <div className={styles.artisanDescriptionContainer}>
          <p className={styles.artisanDescription}>
            Hasan International develops dependable pet accessories for brands
            that need practical design, consistent quality, and flexible product
            development. Our range includes pet toys, bowls, leashes, collars,
            grooming accessories, beds, travel accessories, and custom pet
            products tailored to partner specifications.
          </p>
        </div>

        <h2 className={styles.articlesHeading}>Product Focus</h2>
        <div className="product-gallery">
          {products.map((product) => (
            <article className="product-item" key={product.name}>
              <div className="product-image-container">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="product-name">
                <p>{product.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default PetAccessories;
