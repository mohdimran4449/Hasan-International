import { motion } from "framer-motion";
import React from "react";
import styles from "./LeatherBags.module.css"; // Corrected import path

// Import images
import Bag7 from './LeatherBagsImages/Bagpacks.jpg';
import Bag8 from './LeatherBagsImages/ClutchBags.jpg';
import Bag4 from './LeatherBagsImages/DuffleBags.jpg';
import Bag2 from './LeatherBagsImages/LeatherBelts.jpg';
import Bag3 from './LeatherBagsImages/LeatherWallets.jpg';
import Bag5 from './LeatherBagsImages/Luggage.jpg';
import Bag1 from './LeatherBagsImages/OfficeBags.jpg';
import Bag6 from './LeatherBagsImages/Purses.jpg';

const products = [
  { src: Bag1, name: "Office Bags" },
  { src: Bag2, name: "Leather Belts" },
  { src: Bag3, name: "Wallets & Card Holders" },
  { src: Bag6, name: "Purses" },
];

const LeatherBags = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    // Use a relative URL to reference the PDF in the public folder
    link.href = "/Broacher/Hasan%20international%20Artisan%20Products%20catalog.pdf";
    link.download = "Hasan International Artisan Products.pdf";
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
        <h1 className={styles.artisanHeading}>Artisan Products</h1>
        <div className={styles.artisanDescriptionContainer}>
          <p className={styles.artisanDescription}>
            At Hasan International, we are committed to crafting premium leather products that harmonize tradition with contemporary craftsmanship. Our expertise lies in the creation of luxury bags, purses, belts, and wallets, each meticulously designed to endure the test of time. Our brand is founded upon exceptional quality and unwavering craftsmanship, where each piece is handcrafted by highly skilled artisans using only the finest leather and traditional techniques. These techniques ensure durability and elegance, while our unwavering commitment to excellence guarantees that our products exude sophistication, style, and superior craftsmanship.
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

        {/* Download Brochure Button */}
        <motion.div className={styles.downloadBrochureContainer}>
          <button className={styles.downloadBrochureButton} onClick={handleDownload}>
            Download Catalog
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeatherBags;
