import React from "react";
import logo from "../assets/NavbarImages/whitelogowithdotcom.png";
import googleplay from "../assets/HomeImages/google-play-badge.png";
import appstore from "../assets/HomeImages/app-store-badge.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-primary ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-2 col-md-6 my-5 ">
              <img src={logo} alt className="img-fluid mb-3" />
              <ul >
                <li>
                  <Link to="/about" className={styles.anchor}>About US</Link>
                </li>
                <li>
                  <a className={styles.anchor}  href>Our Team</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Careers</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Press</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 my-5">
              <ul>
                <li>
                  <h6>Search By</h6>
                </li>
                <li>
                  <a className={styles.anchor} href>Speciality</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Area</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Insurance</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Hospital</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Center</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 my-5 ">
              <ul>
                <li>
                  <h6>Are You A Doctor</h6>
                </li>
                <li>
                  <a className={styles.anchor} href>Join Vezzeta Doctors</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 my-5">
              <ul>
                <li>
                  <h6>Need Help</h6>
                </li>
                <li>
                  <a className={styles.anchor} href>Medical Library</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Contact Us</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Terms of Use</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Privacy Policy</a>
                </li>
                <li>
                  <a className={styles.anchor} href>Doctors Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 my-5 icons">
              <ul className="d-flex flex-column gap-3 align-items-center">
                <a className={styles.anchor} href>
                  <li>
                    <img src={googleplay} alt className="img-fluid my-3" />
                  </li>
                </a>
                <a className={styles.anchor} href>
                  <li>
                    <img src={appstore} alt className="img-fluid my-3" />
                  </li>
                </a>
                <li className ="d-flex gap-2">
                  <a className={styles.anchor} href>
                    
                    <FaFacebookF  style={{color:"white",fontSize:"25px"}}/>

                  </a>
                  <a className={styles.anchor} href>
                    <IoLogoInstagram  style={{color:"white",fontSize:"25px"}}/>
                  </a>
                  <a className={styles.anchor} href>
                    
                  <FaTwitter  style={{color:"white",fontSize:"25px"}}/>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
