import React from "react";
import "./Services.css";
import MedicalDivision from "./MedicalDivision";
import TradingDivision from "./TradingDivision"; // import it

const Services = () => {
  return (
    <div className="services-page">
      <section id="medical-section" className="service-section alt-bg"></section>
      <section className="nav-buffer"></section>
      

      {/* PAGE HEADER */}
      <section className="services-hero">
        
        <div className="services-hero-overlay">
          <div className="services-hero-content">
            
            <h1>Our Services</h1>
            <p>
              Delivering precision-driven medical equipment and compliant supply
              solutions that empower healthcare providers to operate efficiently,
              safely, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* MEDICAL DIVISION */}
      <MedicalDivision />

      {/* TRADING DIVISION */}
      
      <section id="trading-section" className="service-section alt-bg"></section>
       <section className="nav-buffer"></section>
      <TradingDivision />
      
    </div>
  );
};

export default Services;
