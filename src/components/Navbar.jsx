import React, { useState } from "react";
import "./Navbar.css";

import Dropdown from 'react-bootstrap/Dropdown';
import logo from "../assets/NavbarImages/whitelogowithdotcom.png";
import Egypt from "../assets/NavbarImages/Egypt.webp";
import Saudi from "../assets/NavbarImages/Saudi.jfif";
import Lebanon from "../assets/NavbarImages/Lebanon.jfif";
import Jordan from "../assets/NavbarImages/Jordan.jfif";
export default function Navbar() {
    const [language, setLanguage] = useState("عربي"); // Initial language state

    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleLanguage = () => {
        setLanguage(language === "English" ? "عربي" : "English");
      };
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
      };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
      <a className="navbar-brand mx-5" href="home.html">
        <img src={logo} alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse  ${isCollapsed ? "" : "show"}`} id="navbarNav">
        <ul className="navbar-nav " style={{ marginLeft: "auto" }}>
          <li className="nav-item">
            
              
                <button className="btn btn-outline-light btn-sm " >Sign Up</button>
        
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vezzeta For Doctors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact Us
            </a>
          </li>
          {/* <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              English
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                English
              </a>
              <a className="dropdown-item" href="#">
                العربية
              </a>
            </div>
          </li> */}
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={toggleLanguage} // Toggle the language when clicked
            >
              {language}
            </button>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={Egypt}alt /> Egypt
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                <img src={Saudi} alt="saudi" className="drpcountry" />{" "}
                Saudi
              </a>
              <a className="dropdown-item" href="#">
                <img src={Jordan} alt="jordan" className="drpcountry" />{" "}
                Jordan
              </a>
              <a className="dropdown-item" href="#">
                <img src={Lebanon} alt="jordan" className="drpcountry" />{" "}
                Lebanon
              </a>
            </div>
          </li> */}
          <Dropdown>
  <Dropdown.Toggle variant="transparent" style={{ color: "white" }}  id="dropdown-basic">
    <img src={Egypt} alt="Egypt" /> Egypt
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#">
      <img src={Saudi} alt="Saudi" className="drpcountry" /> Saudi
    </Dropdown.Item>
    <Dropdown.Item href="#">
      <img src={Jordan} alt="Jordan" className="drpcountry" /> Jordan
    </Dropdown.Item>
    <Dropdown.Item href="#">
      <img src={Lebanon} alt="Lebanon" className="drpcountry" /> Lebanon
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </ul>
      </div>
    </nav>
  );
}
