import React from "react";
import "./Contact.css";
// IMPORT THE IMAGE here so Webpack/Babel can process it correctly


const Contact = () => {
  // Contact details based on the image provided (MAZAVA MEDICAL TRADING W.L.L)
  const contactDetails = {
    address: {
      line1: "Vendor Medical Trading W.L.L",
      line2: "P.O. Box 40234, Building 84, Zone 56, Street 205",
      line3: "Salwa Road, Doha, Qatar",
    },
    email: {
      text: "mail@vendormedicaltrading.com",
      link: "mail@vendormedicaltrading.com",
    },
    phone: {
      text: "+974 4037 8130",
      link1: "tel:+974 4037 8130",
      
    },
    fax: {
      text: "+974 4037 8130",
      link: "+974 4037 8130",
    },
  };

  return (
    <div className="contact-page-container">
      {/* 1. HERO SECTION (Contact Us Header) */}
      <section className="services-hero">
      <div className="services-hero-overlay">
        <div className="services-hero-content">
          <h1>Contact Us</h1>
          
        </div>
      </div>
    </section>

      {/* 2. MAIN CONTENT - Two Big Cards (Get in touch & Contact Info) */}
      <div className="contact-main-content">
        {/* The two cards side-by-side */}
        <div className="contact-cards-wrapper">

          {/* LEFT CARD: Get in touch */}
          <div className="get-in-touch-card glassmorphic-card">
            <h2 className="card-heading">Get in touch</h2>
            <p className="card-text">
              We are ready to partner with you to advance healthcare innovation.
            </p>
            <p className="card-text">
            Whether you have a specific project in mind, need to inquire about our comprehensive range of medical devices and supplies, or wish to discuss how our services can complement your objectives, we encourage you to connect with us immediately using the details here.</p> <p  className="card-text">Our committed team of professionals is ready to provide the exceptional service and reliable, quality products you need for continued growth and value. Initiate a conversation or send detailed inquiries
            </p>
            <div className="card-background-art"></div>
          </div>

          {/* RIGHT CARD: CONTACT INFO */}
          <div className="contact-info-card glassmorphic-card">
            <h2 className="card-heading contact-info-heading">Contact Info</h2>

            <div className="contact-detail">
              <h3 className="detail-title">Address</h3>
              <p className="detail-content">
                {contactDetails.address.line1}
                <br />
                {contactDetails.address.line2}
                <br />
                {contactDetails.address.line3}
              </p>
            </div>

            <div className="contact-detail">
              <h3 className="detail-title">Email Us</h3>
              <a href={contactDetails.email.link} className="detail-content detail-link">
                {contactDetails.email.text}
              </a>
            </div>

            <div className="contact-detail">
              <h3 className="detail-title">Call Us</h3>
              <p className="detail-content">
                <a href={contactDetails.phone.link1} className="detail-link">{contactDetails.phone.text.split(',')[0]}</a>,
                
              </p>
            </div>

            <div className="contact-detail">
              <h3 className="detail-title">Fax</h3>
              <a href={contactDetails.fax.link} className="detail-content detail-link">
                {contactDetails.fax.text}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;