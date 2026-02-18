import "./Navbar.css";
import logo from "../log.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    navigate("/services");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>

      <div className="nav-links">

        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About Us</button>

        {/* DROPDOWN */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="dropdown-btn">Services ▾</button>

          {open && (
            <div className="dropdown-menu">
              <button onClick={() => scrollToSection("medical-section")}>
                Medical Division
              </button>
              <button onClick={() => scrollToSection("trading-section")}>
                Trading Division
              </button>
            </div>
          )}
        </div>

        
        <button onClick={() => navigate("/contact")}>Contact Us</button>
        
      </div>
    </nav>
  );
};

export default Navbar;
