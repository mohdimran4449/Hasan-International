import { motion } from "framer-motion";
import React from "react";
import styles from "./LeatherGoods.module.css";

// Import images
import article1 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/LeatherGoodsImages/BuffaloLeather.jpg';
import article2 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/LeatherGoodsImages/LeatherGarments.jpg';
import article3 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/LeatherGoodsImages/Artisan.jpg';
import article4 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/LeatherGoodsImages/SmallLeatherGoods.jpg';

const products = [
  { src: article1, name: "Finished Leather" },
  { src: article2, name: "Leather Garments" },
  { src: article3, name: "Artisan Products" },
  { src: article4, name: "Small Leather Goods" },
];

const LeatherGoods = () => {
  return (
    <motion.div
      className={styles.servicePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.serviceContainer}>
        <h1 className={styles.artisanHeading}>Leather Goods</h1>
        <div className={styles.artisanDescriptionContainer}>
          <p className={styles.artisanDescription}>
            Hasan International offers a diverse range of leathers from goats, sheep, and buffaloes for footwear, apparel, leather goods, automotive, and furniture industries. Our extensive selection includes various textures, finishes, and color options. Our team of industry experts crafts each leather category meticulously, ensuring comprehensive capabilities to meet all requirements. We craft premium leather products that harmonize tradition with contemporary craftsmanship. Highly skilled artisans use only the finest leather and traditional techniques, ensuring durability and elegance.
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

export default LeatherGoods;