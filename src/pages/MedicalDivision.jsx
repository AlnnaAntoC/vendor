import React, { useState } from "react";
import "./Services.css";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";
import ser5 from "../assets/ser5.png";
import ser6 from "../assets/ser6.png";
import ser7 from "../assets/ser7.png";
import ser8 from "../assets/ser8.png";



const servicesData = [
  { id: "Medical Consumables & Disposables", title: "Medical Consumables & Disposables", image: ser1, description: (
      <div>
        <p>
          We offer a comprehensive range of highquality
            consumable and disposable medical
            products, spanning diverse brands and
            specialized categories.
            From essential items like syringes and
            needles to advanced solutions like sutures,
            staples, catheters, and wound care
            products Etc.,
            Explore our extensive selection of gloves,
            gowns, masks, tubing, packaging, adhesives,
            sealants, and more...
</p>
        <ul>
          <li>Gloves</li>
          <li>OR/Surgery</li>
          <li>Advanced Wound Care</li>
          <li>Anesthesia</li>
          <li>Beds & Mattressess</li>
          <li>Cenral Sterile</li>
          <li>Diagnostics</li>
          <li>Durable Medical Equipment (DME)</li>
          <li>Environmental Services</li>
          <li>Apparel</li>
          <li>Lab Supplies</li>
          <li>Nursing Supplies/Patient Care</li>
          <li>Sterile Procedure Packs</li>
          <li>Respiratory</li>
          <li>Skin Care</li>
          <li>Textiles</li>
          <li>Thearpy and Rehabilitation</li>
          <li>Urology & Ostomy</li>
          <li>Vascular Access</li>
        </ul>
      </div>
    ) },
  { id: "Surgical Instruments", title: "Surgical Instruments", image: ser2, description: (
    <div>
      <p>High-quality surgical instruments are crucial for successful surgeries and positive
      patient outcomes. We supply instruments made from high-grade materials, ensuring
      durability, precision, and sterility.
      </p>
      <p>Our wide range caters to various surgical specialties, meeting strict quality standards
      and regulations for patient safety and surgical efficiency.
      </p>
      <p>Choose us for reliable instruments that contribute to positive patient outcomes.</p>
    </div>
  ) },
  { id: "Physiotherapy & Rehabilitation", title: "Physiotherapy & Rehabilitation", image: ser3, description: (
    <div>
      <p>Invest in Healing: Premium Physiotherapy & Rehabilitation Equipment from Vendor Medical</p>
      <p>We understand that quality is paramount when it comes to recovery. That's why we offer acurated selection of the finest physiotherapy and rehabilitation equipment.</p>
      <p>Our range includes everything from state-of-the-art exercise machines (treadmills, stationarybikes, and more) to reliable assistive devices like walkers and crutches.</p>
      <ul>
          <li>Physiotherapy Equipment & Furniture</li>
          <li>Tables/ Tilting Tables/ Recliner</li>
          <li> Wheelchairs</li>
          <li>In Bed Mobility Equipment</li>
          <li>Respiratory Therapy Equipment</li>
          <li>Walking aids</li>
          <li>Splints</li>
          <li>Aids for ADl activities</li>
          <li>Fitness Training Ergometers</li>
          <li>Gym Equipment</li>
          <li>Sports indoor & outdoor Equipmen</li>
      </ul>
    
    
    
    </div>
  ) },
  { id: "Dental Division", title: "Dental Division", image: ser4, description: (

    <div>
      <p>Partnering with many of the world's most respected
      dental companies, we are Qatar's exclusive and
      authorized source for a comprehensive range of highquality
      dental products.
      </p>
      <p>From equipment and materials to instruments,
      consumables, and lab supplies, we offer an extensive
      selection of leading brands to meet the diverse needs
      of dental professionals throughout the State of Qatar.</p>
      <p><strong>We cover:</strong> Endodontics | Orthodontics | Pediatric Dentistry | Periodontics | Prosthodontics
      Oral Medicine | Oral Radiology | Oral Maxillofacial | Anesthetics</p>
      <ul>
          <li>Dental Units
          </li><li> Dental Instruments
          </li><li> Dental Materials & Consumables
          </li><li> Disinfectants & Solutions
          </li><li> Dental Image Solutions
          </li><li> Handpieces
          </li><li> Endomotors
          </li><li> Light Cures
          </li><li> Dental Cabinets
          </li><li> Dental Microscopes
          </li><li> Dental Implants
          </li><li> Abrasives
          </li><li> Diamond carbide
          </li><li> Ceramics & Cad cam</li>

      </ul>
    </div>
  ) },
  { id: "CSSD & Infection Control", title: "CSSD & Infection Control", image: ser5, description: (

    <div>
      <p>Vendor Medical is your dedicated
        provider of high-quality CSSD materials
        and equipment.
        </p>
        <p>We understand the critical role of
        effective sterilization in preventing
        healthcare-associated infections.
        </p>
        <p>That's why we offer a comprehensive
        range of solutions, including robust
        sterilizers, washers, disinfectors, and
        top-tier packaging materials, all
        designed to maintain the highest
        standards of sterility.</p>
        <p><strong>We cover:</strong> Drapes | Wrapping Paper | Chemical Indicators Class 5 or Class 6 | Plasma Indicators
        Sterilization Reels and Pouches | Scrub brushes | Air Guns for Cleaning purposes
        Labels and Printers | Clog shoes</p>

    </div>

  ) },
  { id: "Emergency & PPE Supplies", title: "Emergency & PPE Supplies", image: ser6, description: (

      <div>
        <p><strong>Safeguarding Lives: Your Trusted Source for Premium Emergency & PPE
        Supplies.</strong>
        </p><p>In times of crisis and everyday workplace challenges, ensuring the safety and
        well-being of individuals is paramount.
        </p><p>Vendor Medical is your dedicated partner in providing top-tier emergency and
        personal protective equipment (PPE) supplies. </p><p>We understand that emergencies
        can strike at any moment, and that's why we focus on delivering reliable, highquality
        products designed to protect people from potential hazards. Whether
        it's a natural disaster, a medical emergency, or a workplace accident, our
        comprehensive range of emergency and PPE supplies offers crucial protection
        and support.</p>
      </div>


  ) },
  { id: "Lab & Analytical", title: "Lab & Analytical", image: ser7, description: (

    <div>
        <p>Investing in reliability, advancing scientific knowledge partner with Vendor
        Medical and experience the difference that premium quality can make in your
        research.
        </p><p>Let us empower you to focus on what matters most; exploring the frontiers of
        science and making impactful discoveries. We provide the tools you need to
        generate accurate, consistent, and dependable results, ultimately
        contributing to the advancement of scientific knowledge.
        </p><p>Contact us today to learn more about our comprehensive product offerings
        and how we can support your research goals.</p>
        <ul><li>Laboratory Furniture and Settings
        </li><li>Laboratory Equipment
        </li><li>Laboratory Instruments and
        Equipment
        </li><li>Safety & General Lab Items
        </li><li>Clinical Lab Devices</li>
        </ul>
    </div>


  ) },
  { id: "Medical & Lab Furniture", title: "Medical & Lab Furniture", image: ser8, description: (
    <div>
      <p>Vendor Medical equips Qatar's healthcare and
      research sectors with top-tier medical and
      laboratory furniture.
      </p><p>Our commitment to quality ensures the safety
      and well-being of both patients and staff, while
      fostering optimal efficiency and productivity.
      </p><p>We understand the critical importance of
      adhering to stringent safety and hygiene
      standards in these environments.
      </p><p>Elevate your healthcare or research facility
      with premium medical and laboratory furniture
      from Vendor Medical Trading.
      Our furniture not only meets but exceeds industry standards for hygiene and durability.</p>
      
    </div>
  ) },
  
  
];

const MedicalDivision = () => {
  const [activeService, setActiveService] = useState("all");
  const filteredServices = activeService === "all" ? servicesData : servicesData.filter(service => service.id === activeService);

  return (
    <section className="medical-division">
      <h2 className="section-heading">Medical Division</h2>
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

export default MedicalDivision;
