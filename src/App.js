import React from "react";
import { Route, Routes } from "react-router-dom"; // No BrowserRouter import needed here
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import AboutUs from "./Pages/AboutUs";
import Equestrian from "./Pages/Equestrian";
import FinishedLeather from "./Pages/FinishedLeather";
import LeatherBags from "./Pages/LeatherBags";
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
            </>
          }
        />
        <Route path="/equestrian" element={<Equestrian />} />
        <Route path="/finished-leather" element={<FinishedLeather />} />
        <Route path="/artisan-products" element={<LeatherBags />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
