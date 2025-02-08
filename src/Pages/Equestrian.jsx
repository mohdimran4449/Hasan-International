import { motion } from "framer-motion";
import React from "react";
import "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/Service.css";

import Briddle from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/EquestrianImages/Briddle.jpg";
import Rugs from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/EquestrianImages/Rugs.jpg";
import Saddle from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/EquestrianImages/Saddle.jpg";
import SaddlePad from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/EquestrianImages/SaddlePad.jpg";

const Equestrian = () => {
  // Removed unused variable "navigate" since no navigation is needed in this version.

  // Product data
  const products = [
    { id: 1, name: "Saddles", image: Saddle, details: "/product1" },
    { id: 2, name: "Bridles & Halters", image: Briddle, details: "/product2" },
    { id: 4, name: "Saddle Pads", image: SaddlePad, details: "/product4" },
    { id: 6, name: "Horse Rugs", image: Rugs, details: "/product6" }
  ];

  return (
    <motion.div
      className="service-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-container">
        <h1 className="equestrian-heading">Equestrian</h1>
        <p className="equestrian-description">
          We provide a wide range of saddles ranging from English saddles to western embossed saddles, handcrafted with great attention to detail using the best quality leather & imported hardware. Choose from a wide range of equestrian equipment such as halters, nosebands, girth, rugs, and many more. Each product is built to last while not compromising on appeal.
        </p>

        {/* Products Heading */}
        <h2 className="products-heading">Products</h2>

        <div className="product-gallery">
          {products.map((product) => (
            <motion.div key={product.id} className="product-item">
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
            </motion.div>
          ))}
        </div>

        {/* Download Brochure Option */}
        <div className="download-brochure-container">
          <a
            className="download-brochure-button"
            href="/Broacher/Hasan International Company Profile.pdf"  // Ensure the file is in your public folder
            download
          >
            Download Catalog
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Equestrian;
