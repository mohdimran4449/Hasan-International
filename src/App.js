import React from "react";
import { Route, Routes } from "react-router-dom"; // No BrowserRouter import needed here
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurBrands from "./components/OurBrands";
import Services from "./components/Services";
import SocialResponsibility from "./components/SocialResponsibility";
import AboutUs from "./Pages/AboutUs";
import Equestrian from "./Pages/Equestrian";
import PetAccessories from "./Pages/PetAccessories";
import PetSupplies from "./Pages/PetSupplies";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop component

function App() {
  return (
    <div className="App">
      <ScrollToTop />  {/* ScrollToTop will be called when route changes */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <OurBrands />
              <SocialResponsibility />
            </>
          }
        />
        <Route path="/equestrian" element={<Equestrian />} />
        <Route path="/pet-supplies" element={<PetAccessories />} />
        <Route path="/pet-food" element={<PetSupplies />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
