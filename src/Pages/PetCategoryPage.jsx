import { motion } from "framer-motion";
import React from "react";
import "./Equestrian.css";
import styles from "./PetSupplies.module.css";

const PetCategoryPage = ({ title, intro, products }) => {
  return (
    <motion.main
      className={styles.detailPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className={styles.detailHero}>
        <div className={styles.detailHeroContent}>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className={styles.detailIntro} aria-labelledby={`${title}-intro`}>
        <h2 id={`${title}-intro`}>Product Overview</h2>
      </section>

      <section className="equestrian-product-gallery" aria-label={`${title} products`}>
        {products.map((product, index) => (
          <article className="equestrian-product-item" key={product.title}>
            <div className="equestrian-product-image-container">
              <div className={styles.productImagePlaceholder}>
                Image Placeholder {index + 1}
              </div>
            </div>
            <div className="equestrian-product-name">
              <p>{product.title}</p>
            </div>
          </article>
        ))}
      </section>
    </motion.main>
  );
};

export default PetCategoryPage;
