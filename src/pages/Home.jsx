import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import slide1 from "../assets/home1.jpg";
import slide2 from "../assets/home2.jpg";
import slide3 from "../assets/home3.jpg";
import provider1 from "../assets/provider1.jpg";
import provider2 from "../assets/provider2.png";
import provider3 from "../assets/provider3.jpg";
import c1 from "../assets/tr1.jpg";
import c2 from "../assets/tr2.png";
import c3 from "../assets/tr3.png";
import c4 from "../assets/tr4.png";
import c5 from "../assets/tr5.jpg";
import c6 from "../assets/tr6.jpg";
import c7 from "../assets/tr7.png";
import c8 from "../assets/tr8.png";
import c9 from "../assets/tr9.png";
import c10 from "../assets/tr10.png";
import c11 from "../assets/tr11.png";

import cert1 from "../assets/cer1.png";
import cert2 from "../assets/cer2.png";
import cert3 from "../assets/cer3.png";
import cert4 from "../assets/cer4.png";
import cert5 from "../assets/cer5.png";
import cert6 from "../assets/cer6.png";
import cert7 from "../assets/cer7.png";
import cert8 from "../assets/cer8.png";








const slides = [
  {
    image: slide1,
    title: "Advancing Healthcare Through Precision Medical Equipment",
    description:
      "Reliable, certified medical trading solutions delivering accuracy, safety, and performance across modern healthcare environments." },
  {
    image: slide2,
    title: "Design Meets Performance",
    description:
      "Modern UI combined with robust engineering to deliver measurable user engagement and ROI.",
  },
  {
    image: slide3,
    title: "Future-Focused Technology",
    description:
      "Transforming ideas into enterprise-grade platforms built for sustainability and scale.",
  },
];

const services = [
  {
    icon: <span className="service-number">1</span>,
    title: "Medical Consumables and Disposables",
    description: "Providing high-quality consumables and disposable medical products for hospitals and clinics."
  },
  {
    icon: <span className="service-number">2</span>,
    title: "Surgical Instruments",
    description: "Offering precision surgical instruments for all medical and surgical procedures."
  },
  {
    icon: <span className="service-number">3</span>,
    title: "Physiotherapy and Rehabilitation",
    description: "Providing equipment and solutions for effective physiotherapy and rehabilitation programs."
  },
  {
    icon: <span className="service-number">4</span>,
    title: "Dental Division",
    description: "Complete range of dental equipment and supplies for clinics and laboratories."
  },
  {
    icon: <span className="service-number">5</span>,
    title: "CSSD And Infection Control",
    description: "Solutions for sterilization, infection control, and safe medical practices."
  },
  {
    icon: <span className="service-number">6</span>,
    title: "Emergency and PPE Supplies",
    description: "Providing essential emergency equipment and personal protective gear for medical staff."
  },
  {
    icon: <span className="service-number">7</span>,
    title: "Lab & Analytical",
    description: "Laboratory instruments, analytical devices, and support for scientific research."
  },
  {
    icon: <span className="service-number">8</span>,
    title: "Medical & Lab Furniture",
    description: "Durable and ergonomic furniture designed for medical and laboratory environments."
  },
  {
    icon: <span className="service-number">9</span>,
    title: "Medical Furniture",
    description: "High-quality furniture tailored for healthcare facilities."
  },
  {
    icon: <span className="service-number">10</span>,
    title: "Healthcare & General Furniture",
    description: "Wide range of furniture solutions for hospitals, clinics, and general spaces."
  },
];

const clientLogos = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11
];

const certificates = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      {/* ===== NAVBAR COVER BAR ===== */}
      <div className="navbar-spacer" />

      {/* ================= HERO SLIDER ================= */}
      <section className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* ===== CONTENT OVERLAY ===== */}
        
        <div className="carousel-overlay">
          <div className="carousel-content" key={currentSlide}>
            <h1 className="carousel-title">
              {slides[currentSlide].title}
            </h1>

            <p className="carousel-description">
              {slides[currentSlide].description}
            </p>

            <Link to="/services" className="explore-btn">
              Explore More
            </Link>
          </div>
        </div>

    </section>


     {/* ================= BEST PROVIDER ================= */}
<section className="best-provider">
  {/* Left Image Collage */}
  <div className="provider-left">
    <div className="image-collage">
      <img src={provider1} alt="Medical Team 1" className="img img-1" />
      <img src={provider2} alt="Medical Team 2" className="img img-2" />
      <img src={provider3} alt="Medical Team 3" className="img img-3" />

    </div>
  </div>

  {/* Right Content */}
  <div className="provider-right">
    <h2>The Best Service Provider</h2>
    <p> Vendor Medical Trading W.L.L. delivers comprehensive medical equipment, consumables, and turnkey healthcare solutions to both public and private healthcare institutions, ensuring quality, reliability, and expert support every step of the way.
     </p>
    
    <a href="/contact" className="primary-btn">Learn More</a>
  </div>

  {/* Floating shapes */}
  <div className="floating-shape shape-1"></div>
  <div className="floating-shape shape-2"></div>
  <div className="floating-shape shape-3"></div>

        

</section>

      {/* ================= OUR SERVICES ================= */}
{/* SERVICES – STYLISH LAYOUT */}
      <section className="about-services">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
          Providing high-quality healthcare solutions across consumables, instruments, rehab & dental equipment, PPE, labs, and furniture.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className= "position" >
          <a href="/Services" className="primary-btn">Explore More</a>
          
        </div>

      </section>


     {/* ================= WHY CHOOSE US ================= */}
<section className="why-choose">
  <div className="why-overlay">

    {/* LEFT CONTENT */}
    <div className="why-content-left">
      <h2>Why Choose Us</h2>
      <Link to="/about" className="explore-btn">
        Discover More
      </Link>
    </div>

    {/* RIGHT GLASS CARD */}
    <div className="why-box">
      <ul>
        <li>Latest Medical Equipment</li>
        <li>Modern Healthcare Technology</li>
        <li>Trusted Global Partnerships</li>
      </ul>
    </div>

  </div>
</section>


      {/* ================= MAJOR CLIENTS ================= */}
      <section className="clients-section">
        <h2>Our Major Clients</h2>
  
  <div className="clients-track">
  {clientLogos.concat(clientLogos).map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt={`Client Logo ${index + 1}`}
    />
  ))}
</div>

</section>


      {/* ================= CERTIFICATES ================= */}
      <section className="certificates-section">
  <div className="cert-overlay">
    <h2 className="cert-title">Certificates & Accreditations</h2>

    <div className="cert-tube">
      <div className="cert-track">
        {certificates.concat(certificates).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Certificate ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
