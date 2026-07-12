import React from "react";
import looneysLogo from "../images/Looneys.jpeg";
import nvusLogo from "../images/NVUS.jpeg";
import organicaLogo from "../images/Organica.jpeg";

const brands = [
  {
    name: "Looneys",
    website: "https://looneys.in",
    logo: looneysLogo,
  },
  {
    name: "NVUS",
    // website: "https://nvus.in",
    logo: nvusLogo,
  },
  {
    name: "Organica",
    // website: "https://organica.in",
    logo: organicaLogo,
  },
];

const OurBrands = () => {
  return (
    <section className="our-brands" aria-labelledby="our-brands-title">
      <h2 id="our-brands-title">Our Brands</h2>
      <div className="brands-grid">
        {brands.map((brand) => (
          <article className="brand-card" key={brand.name}>
            <a
              className="brand-logo-link"
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${brand.name} website`}
            >
              <img src={brand.logo} alt={brand.name} className="brand-logo-image" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurBrands;
