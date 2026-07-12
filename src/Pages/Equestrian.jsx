import { motion } from "framer-motion";
import React from "react";
import "./Equestrian.css";

import Breeches from "./EquestrianImages/Breeches.jpeg";
import BreechesPant from "./EquestrianImages/BreechesPant.jpeg";
import Briddle from "./EquestrianImages/Briddle.jpg";
import Bridles from "./EquestrianImages/Bridles.jpeg";
import Girths from "./EquestrianImages/Girths.jpeg";
import Halters from "./EquestrianImages/Halters.jpeg";
import Rugs from "./EquestrianImages/Rugs.jpeg";
import Saddle from "./EquestrianImages/Saddle1.jpg";
import SaddlePad from "./EquestrianImages/SaddlePad.jpg";
import WesternSaddles from "./EquestrianImages/WesternSaddles.jpeg";

import EquestrianBrochure from "./Brochures/Hasan International Equestrian Catalog 2026.pdf";

const Equestrian = () => {
  const products = [
    { id: 1, name: "Saddles", image: Saddle },
    { id: 2, name: "Western Saddles", image: WesternSaddles },
    { id: 3, name: "Saddle Pads", image: SaddlePad },
    { id: 4, name: "Bridles", image: Bridles },
    { id: 5, name: "Bridle Sets", image: Briddle },
    { id: 6, name: "Girths", image: Girths },
    { id: 7, name: "Halters", image: Halters },
    { id: 8, name: "Rugs", image: Rugs },
    { id: 9, name: "Breeches", image: Breeches },
    { id: 10, name: "Breeches Pants", image: BreechesPant },
  ];

  return (
    <motion.div
      className="equestrian-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="equestrian-container">
        <h1 className="equestrian-heading">Equestrian</h1>
        <p className="equestrian-description">
          We provide a wide range of saddles ranging from English saddles to western embossed saddles, handcrafted with great attention to detail using the best quality leather & imported hardware. Choose from a wide range of equestrian equipment such as halters, nosebands, girth, rugs, and many more. Each product is built to last while not compromising on appeal.
        </p>

        <h2 className="products-heading">Products</h2>

        <div className="equestrian-product-gallery">
          {products.map((product) => (
            <motion.div key={product.id} className="equestrian-product-item">
              <div className="equestrian-product-image-container">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="equestrian-product-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="equestrian-product-name">
                <p>{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Download Brochure Section — below gallery, centered */}
        <div className="download-brochure-container">
          <a
            href={EquestrianBrochure}
            download="Equestrian-Brochure.pdf"
            className="download-brochure-button"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Equestrian;
