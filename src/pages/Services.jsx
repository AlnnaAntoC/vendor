import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// Assets
import a from "../assets/a.jpg";
import k from "../assets/k.jpg";

/* =========================
   SERVICE DATA MODELS
   ========================= */

// MEDICAL DIVISION
const medicalServices = [
  {
    title: "Medical Consumables and Disposables",
    description: "Single-use essentials ensuring safety, hygiene, and compliance.",
    image: k,
     // updated path
  },
  {
    title: "Surgical Instruments",
    description: "Precision-engineered instruments for critical procedures.",
    image: a,
    
  },
  {
    title: "Physiotherapy and Rehabilitation",
    description: "Advanced recovery and mobility enhancement solutions.",
    image: a,
    
  },
  {
    title: "Dental Division",
    description: "Comprehensive dental equipment and clinical solutions.",
    image: a,
    
  },
  {
    title: "CSSD and Infection Control",
    description: "Sterilization and infection prevention systems.",
    image: a,
    
  },
  {
    title: "Emergency and PPE Supplies",
    description: "Critical emergency response and protection equipment.",
    image: a,
    
  },
  {
    title: "Lab & Analytical",
    description: "Reliable diagnostic and analytical laboratory systems.",
    image: a,
    
  },
  {
    title: "Medical Furniture",
    description: "Ergonomic furniture designed for healthcare environments.",
    image: a,
   
  },
];

// TRADING DIVISION
const tradingServices = [
  {
    title: "Medical & Lab Furniture",
    description: "Functional furniture solutions for labs and hospitals.",
    image: a,
   
  },
  {
    title: "Healthcare & General Furniture",
    description: "Durable furniture supporting healthcare operations.",
    image: a,
    
  },
  {
    title: "Lab & Analytical",
    description: "Trading of laboratory and analytical product portfolios.",
    image: a,

  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <section className="nav-buffer"></section>

      <section className="ser">
        <h2 className="title">Services</h2>
        <p>
          We offer a wide range of medical equipment and supplies, from
          consumables and surgical instruments to lab devices, rehabilitation
          tools, and healthcare furniture, ensuring quality, safety, and
          efficiency for every healthcare facility.
        </p>
      </section>

      {/* MEDICAL DIVISION */}
      <section className="services-section">
        <h2 className="services-title">Medical Division</h2>

        <div className="services-grid">
          {medicalServices.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="service-card"
            >
              <img src={service.image} alt={service.title} />

              <div className="service-overlay">
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRADING DIVISION */}
      <section className="services-section">
        <h2 className="services-title">Trading Division</h2>

        <div className="services-grid">
          {tradingServices.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="service-card"
            >
              <img src={service.image} alt={service.title} />

              <div className="service-overlay">
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
