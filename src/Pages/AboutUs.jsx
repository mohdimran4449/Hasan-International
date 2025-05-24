import { motion } from "framer-motion";
import React from "react";
import aboutImage from "/Users/mohdimran/Desktop/first project/hasan-international/src/images/PHOTO-2025-02-04-19-52-07.jpg";
import historyImage1 from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/AboutUsImages/History.jpeg";
import historyImage2 from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/AboutUsImages/WhatWeDo.jpeg";
import leatherImage from "/Users/mohdimran/Desktop/first project/hasan-international/src/Pages/AboutUsImages/WhoWeAre.jpg";
const AboutUs = () => {
  return (
    <motion.section
      id="about-us"
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Empty space instead of banner */}
      <div style={{ height: '50px' }}></div>

      {/* About Us Introduction Section */}
      <div className="about-intro-container">
        <div className="about-intro-image">
          <img src={aboutImage} alt="About Us" className="featured-image" />
        </div>
        <div className="about-intro-content" style={{ paddingRight: 0, paddingLeft: '3rem' }}>
          <h2 className="intro-heading">Our Story</h2>
          <p className="intro-text">
            Hasan International is a family-owned leather goods manufacturer
            and exporter with a longstanding commitment to innovation in the
            leather industry. Our expertise lies in the meticulous crafting
            of high-quality leather products, sourced exclusively from
            government-approved tanneries. With a rich history and dedication to
            quality, we serve a diverse range of clients worldwide.
          </p>
          
          {/* Download Brochure Button */}
          <a
            href="/Broacher/Hasan International Company Profile.pdf"
            className="download-btn"
            download
          >
            Download Brochure
          </a>
        </div>
      </div>
      
      {/* Content Sections in Rahman Group Style */}
      <div className="about-content-wrapper">
        {/* WHO WE ARE SECTION */}
        <div className="about-intro-container">
          <div className="about-intro-content">
            <h2 className="intro-heading">Who We Are</h2>
            <p className="intro-text">
              Throughout our brief history, Hasan International has established
              itself as a reliable leather goods manufacturing partner, consistently
              expanding into new sectors. As a cohesive family, we prioritize
              providing value and comfort to all members while relentlessly
              crafting high-quality products for our esteemed global partners.
            </p>
          </div>
          <div className="about-intro-image">
            <img src={leatherImage} alt="Leather products" className="featured-image" />
          </div>
        </div>

        {/* HISTORY SECTION */}
        <div className="about-intro-container">
          <div className="about-intro-image">
            <img src={historyImage1} alt="Historical building" className="featured-image" />
          </div>
          <div className="about-intro-content" style={{ paddingRight: 0, paddingLeft: '3rem' }}>
            <h2 className="intro-heading">History</h2>
            <p className="intro-text">
              Hasan International was established in 1971 by Mr. Fazal Hasan, a migrant
              who relocated to Kanpur to secure employment at a cotton-textile mill. As
              Kanpur underwent a transformation from its former moniker as "Manchester
              of the East" to its current status as "the leather capital of India," Mr. Fazal
              initiated a modest drum-dyed leather tannery in Jajmau, Kanpur.
              Over three generations, our organization has undergone significant evolution, embracing
              contemporary technological advancements while maintaining a steadfast
              commitment to our traditional roots.
            </p>
          </div>
        </div>

        {/* WHAT WE DO SECTION */}
        <div className="about-intro-container">
          <div className="about-intro-content">
            <h2 className="intro-heading">What We Do</h2>
            <p className="intro-text">
              For over a decade, our family-owned leather goods manufacturing and
              exporting company has been at the forefront of leather products
              innovation. We exclusively utilize high-quality tanned leather sourced
              from government-approved tanneries.
              This premium leather is then meticulously handcrafted by our team of highly 
              skilled artisans to replicate the likeness of our esteemed partners.
            </p>
          </div>
          <div className="about-intro-image">
            <img src={historyImage2} alt="Leather production" className="featured-image" />
          </div>
        </div>

        {/* OUR PILLARS SECTION */}
        <div className="about-content-section">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h3 style={{ display: 'inline-block' }}>Our Success Pillars</h3>
          </div>
          <div className="pillars-container">
            <div className="pillar-item">
              <h4>Manufacturing Excellence</h4>
              <p>Our manufacturing workflows, machine integration, and processes are under constant scrutiny and improved continuously for increased yield, productivity, and reliability.</p>
            </div>
            <div className="pillar-item">
              <h4>Quality<br/>Materials</h4>
              <p>We source the finest leather materials and maintain strict quality control throughout our production process.</p>
            </div>
            <div className="pillar-item">
              <h4>Skilled Craftsmanship</h4>
              <p>Our team of highly skilled artisans brings decades of experience in leather crafting, ensuring premium quality in every product.</p>
            </div>
            <div className="pillar-item">
              <h4>Customer Satisfaction</h4>
              <p>We build lasting relationships with our clients by consistently delivering products that exceed expectations.</p>
            </div>
          </div>
        </div>

        {/* Vision and Mission sections removed as requested */}
      </div>
    </motion.section>
  );
};

export default AboutUs;
