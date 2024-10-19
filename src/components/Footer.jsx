import React, { useContext } from "react";
import logo from "../assets/NavbarImages/whitelogowithdotcom.png";
import googleplay from "../assets/HomeImages/google-play-badge.png";
import appstore from "../assets/HomeImages/app-store-badge.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/TranslationContext";
import { Strings } from "../constant/strings";
export default function Footer() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <footer className="footer bg-primary " dir={language == "English" ? "ltr" : "rtl"}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-2 col-md-6 my-5 ">
              <img src={logo} alt className="img-fluid mb-3" />
              <ul >
                <li>
                  <Link to="/about" className={styles.anchor}>{language == "English" ? Strings.footer.about.en : Strings.footer.about.ar}</Link>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.team.en : Strings.footer.team.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.careers.en : Strings.footer.careers.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.press.en : Strings.footer.press.ar}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 my-5">
              <ul>
                <li>
                  <h6>{language == "English" ? Strings.footer.search.en : Strings.footer.search.ar}</h6>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.speciality.en : Strings.footer.speciality.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.area.en : Strings.footer.area.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.insurance.en : Strings.footer.insurance.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.hospital.en : Strings.footer.hospital.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.center.en : Strings.footer.center.ar}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 my-5 ">
              <ul>
                <li>
                  <h6>{language == "English" ? Strings.footer.doctor.en : Strings.footer.doctor.ar}</h6>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.doctors.en : Strings.footer.doctors.ar}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 my-5">
              <ul>
                <li>
                  <h6>{language == "English" ? Strings.footer.help.en : Strings.footer.help.ar}</h6>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.library.en : Strings.footer.library.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.contact.en : Strings.footer.contact.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.terms.en : Strings.footer.terms.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.policy.en : Strings.footer.policy.ar}</a>
                </li>
                <li>
                  <a className={styles.anchor} href>{language == "English" ? Strings.footer.docprivacy.en : Strings.footer.docprivacy.ar}</a>
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
                <li className="d-flex gap-2">
                  <a className={styles.anchor} href>

                    <FaFacebookF style={{ color: "white", fontSize: "25px" }} />

                  </a>
                  <a className={styles.anchor} href>
                    <IoLogoInstagram style={{ color: "white", fontSize: "25px" }} />
                  </a>
                  <a className={styles.anchor} href>

                    <FaTwitter style={{ color: "white", fontSize: "25px" }} />

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
