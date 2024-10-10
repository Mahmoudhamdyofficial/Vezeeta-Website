import React, { useEffect, useState } from "react";
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
  return (
    <>
      <Navbar />
      <div>
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
            <h1>Better Healthcare for a Better Life</h1>
            <p>
              Book online or call{" "}
              <span style={{ color: "#FF6347" }}>16676</span>
            </p>
          </div>
          <DoctorSearchBar />
        </div>
        <div className="container mt-5 ">
          <h1 className="py-3" style={{ color: "grey" }}>
            New services for better healthcare
          </h1>
          {/* First Card */}
          <div className={`${styles["card-shamel"]} card mb-3`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="row">
                <img src={shamel} alt="Profile" style={{ width: 100 }} />
                <div className="px-3">
                  <h3 className={styles["card-title"]}>Shamel</h3>
                  <p
                    className={styles["card-text"]}
                    style={{ color: "white", fontSize: 16 }}
                  >
                    Save up to 80% on all medical services
                    <br />
                    The network is available only through the App - In Cairo and
                    Giza till now
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`btn btn-light col-lg-3 py-3 `}
                style={{ color: "grey" }}
              >
                See Details
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
                    North, your way to practice peace.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className={`btn ${styles["btn-primary"]} col-lg-3 py-3"`}
                style={{ color: "#219de2" }}
              >
                Explore North
              </a>
            </div>
          </div>
          {/* Third Card */}
          <div className="card mb-3 card-question">
            <div className="card-body mx-3">
              <h4 className={styles["card-title"]} style={{ color: "#666666" }}>
                Have a Medical Question?
              </h4>
              <p
                className={styles["card-text"]}
                style={{ fontSize: 16, color: "#666666" }}
              >
                Submit your medical question and receive an answer from a
                specialized doctor
              </p>
              <a
                href="#"
                className={`btn ${styles["btn-primary"]} col-lg-2 py-3`}
                style={{ color: "#219de2" }}
              >
                Ask now
              </a>
            </div>
          </div>
          {/*Fourth Card*/}
          <div className={`card mb-3 card-question ${styles.pharmacy}`}>
            <div className="card-body mx-3">
              <h4 className={styles["card-title"]}>Pharmacy</h4>
              <p className={styles["card-text"]}>
                Get your medicine and all your pharmacy needs
              </p>
              <a
                href="#"
                className={`btn col-lg-2 py-3 ${styles["btn-primary"]}`}
                style={{ color: "#327ac5" }}
              >
                Place order
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
                  <h4 className={styles["card-title"]}>Teleconsultation</h4>
                  <p className={styles["card-text"]} style={{ fontSize: 16 }}>
                    Schedule a voice or video call with a specialized doctor.
                  </p>
                  <a
                    href="DoctorDetails.html"
                    className="col-lg-2 py-3"
                    style={{ color: "#327ac5" }}
                  >
                    Book a Call ▸
                  </a>
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
                  <h4 className={styles["card-title"]}>Home Visit</h4>
                  <p className={styles["card-text"]} style={{ fontSize: 16 }}>
                    Choose the specialty, and the doctor will visit you at home.
                  </p>
                  <a
                    href="#"
                    className="col-lg-2 py-3"
                    style={{ color: "#327ac5" }}
                  >
                    Book a visit ▸
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
              <h4 className="prevFooter">All your healthcare needs</h4>
              <p>
                Search and book a clinic visit, home visit, or a
                teleconsultation. Order your medicine and book a service or
                operation.
              </p>
            </div>
            <div className="col-lg-3">
              <img src={reviews} alt="review" />
              <h4 className="prevFooter">Verified patient reviews</h4>
              <p>
                Doctor ratings are from patients who booked and visited the
                doctor through Vezeeta.
              </p>
            </div>
            <div className="col-lg-3">
              <img src={booking} alt="booking" />
              <h4 className="prevFooter">Your booking is confirmed</h4>
              <p>
                Your booking is automatically confirmed, as the doctor specifies
                his working hours and is notified of the booking details.
              </p>
            </div>
            <div className="col-lg-3">
              <img src={security} alt="security" />
              <h4 className="prevFooter">
                Book for free, and pay in the clinic
              </h4>
              <p>
                The consultation fees stated on Vezeeta are the actual doctor's
                fees with no extra charges.
              </p>
            </div>
          </div>
          <div className={`${styles.downApp} col-lg-12 p-5 rounded`}>
            <h4>Download Vezeeta Application</h4>
            <div style={{ maxWidth: 400, wordWrap: "break-word" }}>
              <p>
                Search, compare and book doctor consultations with ease. Order
                your medicines &amp; get them deilvered within 60 minutes. Track
                your steps count &amp; earn points on hitting the daily goal
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
      <Footer />
    </>
  );
}
