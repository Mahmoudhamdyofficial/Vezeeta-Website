import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import img1 from "../../assets/HomeImages/homecovernewen1-eg-en.jpeg";
import img2 from "../../assets/HomeImages/homecovernewen2-eg-en.jpeg";
import img3 from "../../assets/HomeImages/homecovernewen3-eg-en.jpeg";
import shamel from "../../assets/HomeImages/shamel-logo.webp";
import mentalHealthLogo from "../../assets/HomeImages/mental-health-image.png";
import north from "../../assets/HomeImages/mental-health-logo.svg";
import teleconsultation from "../../assets/HomeImages/mobile.png";
import homeVisit from "../../assets/HomeImages/desktop.png";
import medicalCare from "../../assets/HomeImages/medical-care-icon.svg";
import reviews from "../../assets/HomeImages/doctor-icon.svg";
import booking from "../../assets/HomeImages/booking-icon.svg";
import security from "../../assets/HomeImages/security-icon.svg";
import appstore from "../../assets/HomeImages/app-store-badge.png";
import googleplay from "../../assets/HomeImages/google-play-badge.png";
import styles from "./Home.module.css";
import Searchfilters from "../../components/Searchfilters";
import Offers from "../../components/Offers";
import Specialities from "../../components/Specialities";
import DoctorSearchBar from "../../components/Searchfilters";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/TranslationContext";
import { Strings } from "../../constant/strings";
export default function Home() {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const slideshowStyles = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    height: "100vh", // Full viewport height
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    transition: "all 0.5s ease",
  };
  const { language, setLanguage } = useContext(LanguageContext);
  console.log(setLanguage);
  return (
    <>
      <div dir={language == "English" ? "ltr" : "rtl"}>
        <div
          className={`${styles["bg-img"]} d-flex flex-column justify-content-center `}
          style={slideshowStyles}
        >
          <div
            style={{
              color: "grey",
              textAlign: "center",
            }}
          >
            <h1 className={`${styles["home-head"]}`}>{language == "English" ? Strings.Home.betterlife.en : Strings.Home.betterlife.ar}</h1>
            <p className={`${styles["home-head"]}`}>
              {language == "English" ? Strings.Home.book.en : Strings.Home.book.ar}{" "}
              <span style={{ color: "#FF6347" }} className={`${styles["home-head"]}`}>{language == "English" ? Strings.Home.number.en : Strings.Home.number.ar}</span>
            </p>
          </div>
          <DoctorSearchBar />
        </div>
        <div className="container mt-5 ">
          <h1 className="py-3" style={{ color: "grey" }}>
            {language == "English" ? Strings.Home.newservice.en : Strings.Home.newservice.ar}
          </h1>
          {/* First Card */}
          <div className={`${styles["card-shamel"]} card mb-3`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="row">
                <img src={shamel} alt="Profile" style={{ width: 100 }} />
                <div className="px-3">
                  <h3 className={styles["card-title"]}>{language == "English" ? Strings.Home.shamel.en : Strings.Home.shamel.ar}</h3>
                  <p
                    className={styles["card-text"]}
                    style={{ color: "white", fontSize: 16 }}
                  >
                    {language == "English" ? Strings.Home.saveup.en : Strings.Home.saveup.ar}
                    <br />
                    {language == "English" ? Strings.Home.thenetwork.en : Strings.Home.thenetwork.ar}
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`btn btn-light col-lg-3 py-3 `}
                style={{ color: "grey" }}
              >
                {language == "English" ? Strings.Home.details.en : Strings.Home.details.ar}
              </a>
            </div>
          </div>
          {/* Second Card */}
          <div className={`${styles["card-north"]} card mb-3`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="row">
                <img
                  src={mentalHealthLogo}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: 100 }}
                />
                <div className="p-3">
                  <img
                    src={north}
                    alt="Profile"
                    className={styles.north}
                    style={{ width: 100 }}
                  />
                  <p
                    className={styles["card-text"]}
                    style={{ fontSize: 16, color: "darkgray" }}
                  >
                    {language == "English" ? Strings.Home.north.en : Strings.Home.north.ar},
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`btn ${styles["btn-primary"]} ${styles.anchor} col-lg-3 py-3"`}
                style={{ color: "#219de2" }}
              >
                {language == "English" ? Strings.Home.explore.en : Strings.Home.explore.ar}
              </a>
            </div>
          </div>
          {/* Third Card */}
          <div className="card mb-3 card-question">
            <div className="card-body mx-3">
              <h4 className={styles["card-title"]} style={{ color: "#666666" }}>
                {language == "English" ? Strings.Home.question.en : Strings.Home.question.ar}
              </h4>
              <p
                className={styles["card-text"]}
                style={{ fontSize: 16, color: "#666666" }}
              >
                {language == "English" ? Strings.Home.submit.en : Strings.Home.submit.ar}
              </p>
              <a
                href="#"
                className={`btn ${styles["btn-primary"]} ${styles.anchor} col-lg-2 py-3`}
                style={{ color: "#219de2" }}
              >
                {language == "English" ? Strings.Home.Ask.en : Strings.Home.Ask.ar}
              </a>
            </div>
          </div>
          {/*Fourth Card*/}
          <div dir={language == "English" ? "ltr" : "ltr"}
            className={`card mb-3 card-question ${styles.pharmacy}`}>
            <div className="card-body mx-3">
              <h4 className={styles['card-title']}>{language == "English" ? Strings.Home.pharmacy.en : Strings.Home.pharmacy.ar}</h4>
              <p className={styles['card-text']}>
                {language == "English" ? Strings.Home.get.en : Strings.Home.get.ar}
              </p>
              <a
                href="#"
                className={`btn col-lg-2 py-3 ${styles["btn-primary"]} ${styles.anchor}`}
                style={{ color: "#327ac5" }}
              >
                {language == "English" ? Strings.Home.order.en : Strings.Home.order.ar}
              </a>
            </div>
          </div>
        </div>
        <div className=" mb-3 container">
          <div className="row justify-content-between">
            <div className="card col-lg-6">
              <div className="card-body d-flex">
                <img
                  src={teleconsultation}
                  alt="phone"
                  className="img-fluid"
                  style={{ width: 100 }}
                />
                <div>
                  <h4 className={styles["card-title"]}>{language == "English" ? Strings.Home.teleco.en : Strings.Home.teleco.ar}</h4>
                  <p className={styles["card-text"]} style={{ fontSize: 16 }}>
                    {language == "English" ? Strings.Home.voiceorvideo.en : Strings.Home.voiceorvideo.ar}
                  </p>
                  <Link to="/teleconsultation" style={{ color: "#219de2" }}>
                    {language == "English" ? Strings.Home.call.en : Strings.Home.call.ar}
                  </Link>
                </div>
              </div>
            </div>
            <div className="card col-lg-6">
              <div className="card-body d-flex">
                <img
                  src={homeVisit}
                  alt="home"
                  className="img-fluid "
                  style={{ width: 100 }}
                />
                <div>
                  <h4 className={styles["card-title"]}>{language == "English" ? Strings.Home.home.en : Strings.Home.home.ar}</h4>
                  <p className={styles["card-text"]} style={{ fontSize: 16 }}>
                    {language == "English" ? Strings.Home.choosehome.en : Strings.Home.choosehome.ar}
                  </p>
                  <a href="#" className={`${styles["btn-primary"]}col-lg-2 py-3`}>
                    {language == "English" ? Strings.Home.visit.en : Strings.Home.visit.ar}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Offers />
        {/**/}
        <Specialities />
        {/**/}
        <div className="container-fluid bg-white p-5">
          <div className="row">
            <div className="col-lg-3">
              <img src={medicalCare} alt="home" />
              <h4 className={styles.prevFooter}>{language == "English" ? Strings.Home.healthcare.en : Strings.Home.healthcare.ar}</h4>
              <p>
                {language == "English" ? Strings.Home.clinicvisit.en : Strings.Home.clinicvisit.ar}
              </p>
            </div>
            <div className="col-lg-3">
              <img src={reviews} alt="review" />
              <h4 className={styles.prevFooter}>{language == "English" ? Strings.Home.reviews.en : Strings.Home.reviews.ar}</h4>
              <p>
                {language == "English" ? Strings.Home.doctorratings.en : Strings.Home.doctorratings.ar}
              </p>
            </div>
            <div className="col-lg-3">
              <img src={booking} alt="booking" />
              <h4 className={styles.prevFooter}>{language == "English" ? Strings.Home.confirmed.en : Strings.Home.confirmed.ar}</h4>
              <p>
                {language == "English" ? Strings.Home.autoconfirmed.en : Strings.Home.autoconfirmed.ar}
              </p>
            </div>
            <div className="col-lg-3">
              <img src={security} alt="security" />
              <h4 className={styles.prevFooter}>
                {language == "English" ? Strings.Home.forfree.en : Strings.Home.forfree.ar}
              </h4>
              <p>
                {language == "English" ? Strings.Home.feesvezeeta.en : Strings.Home.feesvezeeta.ar}
              </p>
            </div>
          </div>
          <div dir={language == "English" ? "ltr" : "ltr"} className={`${styles.downApp} col-lg-12 p-5 rounded`}>
            <h4>{language == "English" ? Strings.Home.app.en : Strings.Home.app.ar}</h4>
            <div style={{ maxWidth: 400, wordWrap: "break-word" }}>
              <p>
                {language == "English" ? Strings.Home.compare.en : Strings.Home.compare.ar}
              </p>
            </div>
            <div>
              <a href="#">
                <img src={appstore} alt="appstore" className="img-fluid" />
              </a>
              <a href="#">
                <img src={googleplay} alt="googleplay" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
