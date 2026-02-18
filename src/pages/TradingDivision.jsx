import React, { useState } from "react";
import "./Services.css";
import ser10 from "../assets/ser10.png";
import ser11 from "../assets/ser11.png";
import ser12 from "../assets/ser12.png";
import ser9 from "../assets/ser9.png";


const servicesData = [
  
  { id: "Healthcare Furniture", title: "Healthcare Furniture", image: ser9, description: (
    <div>
        <p>Engineered to meet stringent clinical and regulatory standards, our healthcare furniture portfolio supports patient comfort, caregiver efficiency, and infection-control protocols. Each product is designed for durability, ergonomic performance, and seamless integration into modern healthcare environments.</p>
    </div>
  ) },
  { id: "General Furniture", title: "General Furniture", image: ser10, description: (
    <div>
        <p>Our general furniture solutions combine contemporary design with functional excellence, delivering versatile furnishings for commercial, hospitality, and corporate spaces. Crafted with high-quality materials, these solutions enhance aesthetics while ensuring long-term operational value.</p>
        <p><strong>We supply:</strong> Office Furniture |  School Furniture  | Classroom Seating  | Theaters |  Cinemas  | Stadiums |  Arenas |  
        Open Plan System |  Workbenches |  Free standing Desking |  Customized furniture  | Storage Units |  Corporate spaces |  Multipurpose Chairs |  Lounge sofas & Armchairs  | Conference & discussion Tables</p>
    </div>
  ) },
  { id: "Curtains", title: "Curtains", image: ser11, description: (
    <div>
        <p>
            We provide customized curtain solutions that balance privacy, light control, and visual appeal. Designed for healthcare, hospitality, and commercial interiors, our curtains are manufactured to meet hygiene standards while elevating the overall spatial experience.
        </p>
        <p><strong>We supply :</strong> Antibacterial Curtains
| Antimicrobial Curtains
| Window Blinds
| Roman Blinds
| Venetian blinds
| External & Internal Shading System</p>
    </div>
  ) },
  { id: "Sports Field Developement", title: "Sports Field Developement", image: ser12, description: (
    <div>
        <p>
            Our sports field development solutions deliver end-to-end infrastructure for professional, institutional, and recreational facilities. From surface engineering to lighting and safety systems, we ensure compliance with international standards and long-term performance sustainability.
        </p>
        <p><strong>We Supply :</strong> Artificial Turf Soccer Fields
| Synthetic Tracks
| Multipurpose Fields
| Indoor Sports and Multipurpose Halls
| Sports Flooring and Markings</p>
    </div>
  ) },
];

const TradingDivision = () => {
  const [activeService, setActiveService] = useState("all");
  const filteredServices = activeService === "all" ? servicesData : servicesData.filter(service => service.id === activeService);

  return (
    <section className="trading-division">
      <h2 className="section-heading">Trading  Division</h2>
      <div className="medical-layout">
        <aside className="filter-panel">
          <button className={activeService === "all" ? "active" : ""} onClick={() => setActiveService("all")}>All</button>
          {servicesData.map(service => (
            <button key={service.id} className={activeService === service.id ? "active" : ""} onClick={() => setActiveService(service.id)}>
              {service.id.toUpperCase()}
            </button>
          ))}
        </aside>

        <div className="services-content">
          {activeService === "all" ? (
            <div className="card-grid">
              {servicesData.map(service => (
                <div className="service-card" key={service.id}>
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          ) : (
            filteredServices.map(service => (
              <div className="service-detail" key={service.id}>
                <h3>{service.title}</h3>
                <img src={service.image} alt={service.title} />
                <p>{service.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TradingDivision;
