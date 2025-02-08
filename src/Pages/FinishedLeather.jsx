import { motion } from "framer-motion";
import React from "react";
import "./FinishedLeather.css";
import article1 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/FinishedLeatherImages/BuffaloLeather.jpg';
import article3 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/FinishedLeatherImages/GoatLeather.jpg';
import article2 from '/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/FinishedLeatherImages/SheepNappa.jpg';

const FinishedLeather = () => {
  return (
    <motion.div
      className="service-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="service-container">
        {/* Finished Leather Heading and Description */}
        <h1 className="finished-leather-heading">Finished Leather</h1>
        <div className="finished-leather-description-container">
          <p className="finished-leather-description">
            Hasan International offers a diverse range of leathers derived from goats, sheep and buffaloes, utilized in the footwear, apparel, leather goods, automotive, and furniture industries. Our extensive selection encompasses various textures, finishes, and color options to cater to your specific preferences. Each leather category is meticulously crafted by a team of industry experts across India, ensuring our comprehensive capabilities to meet all your leather requirements.
          </p>
        </div>

        {/* Articles Section */}
        <div className="articles-section">
          <h2 className="articles-heading">Articles</h2>

          {/* Article Images Grid (single column with 3 images) */}
          <div className="articles-gallery">
            <motion.div className="article-item">
              <motion.img
                src={article1}
                alt="Buffalo Leather"
                className="article-image"
                whileHover={{ scale: 1.05 }}
              />
              <div className="article-name">Buffalo Leather</div>
            </motion.div>
            <motion.div className="article-item">
              <motion.img
                src={article2}
                alt="Sheep Nappa"
                className="article-image"
                whileHover={{ scale: 1.05 }}
              />
              <div className="article-name">Sheep Nappa</div>
            </motion.div>
            <motion.div className="article-item">
              <motion.img
                src={article3}
                alt="Goat Leather"
                className="article-image"
                whileHover={{ scale: 1.05 }}
              />
              <div className="article-name">Goat Leather</div>
            </motion.div>
          </div>
        </div>

        {/* Download Brochure Button */}
        <motion.div
          className="download-brochure-container"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a
  href="/Broacher/Hasan international Finished Leather catalog.pdf"
  className="download-btn"
  download
>
  Download Brochure
</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinishedLeather;