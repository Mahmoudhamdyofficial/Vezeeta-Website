import React,{ useState, useEffect } from 'react'
import img1 from "../assets/s/s1.jpg";
import img2 from "../assets/s/s2.jpg";
import img3 from "../assets/s/s3.webp";
import img4 from "../assets/s/s4.webp";
import img5 from "../assets/s/s5.jpg";
import img6 from "../assets/s/s6.webp";
import img7 from "../assets/s/s7.webp";
import img8 from "../assets/s/s8.webp";
import styles from '../screens/Home/Home.module.css'
export default function Specialities() {
    const specialtiesList = [
        { id: "1", name: "Skin", img: `${img1}`},
        { id: "2", name: "Teeth", img: `${img2}`},
        { id: "3", name: "Mental Disorders", img: `${img3}`},
        { id: "4", name: "Child", img: `${img4}`}, 
        { id: "5", name: "Brain & Nerves", img: `${img5}`},
        { id: "6", name: "Bones", img: `${img6}`},
        { id: "7", name: "Gynatology and Infertility", img: `${img7}`},
        { id: "8", name: "Ear, Nose and Throat", img: `${img8}`},
      ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 5;
    const totalSlides = Math.ceil(specialtiesList.length / itemsPerView);
  
    const moveSlide = (direction) => {
      setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
    };
  return (
    <div className="slider-containerMain">
    <div className={styles['slider-container']}>
      <button className={`${styles['slider-button']} ${styles.prev}`} onClick={() => moveSlide(-1)}>❮</button>
      <div className="slider-wrapper" style={{ backgroundColor: "#eef0f2" }}>
        <div className="d-flex justify-content-between p-4">
          <h1 style={{ fontWeight: 650, color: "grey" }}>Book from top specialties</h1>
        </div>
        <div id="offersSecond" className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {specialtiesList.map(({ id, name, img }) => (
            <div key={id} id={`product-id-${id}`} className={styles.item}>
              <img src={img} alt={name} className="img-fluid" />
              <div className="details">
                <h6 className="fw-bolder" style={{ color: 'grey', fontWeight: 550 }}>{name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={`${styles['slider-button']} ${styles.next}`} onClick={() => moveSlide(1)}>❯</button>
    </div>
  </div>
  )
}
