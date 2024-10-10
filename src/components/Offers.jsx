import React,{ useState, useEffect } from 'react'
import img1 from "../assets/f/f1.png";
import img2 from "../assets/f/f2.png";
import img3 from "../assets/f/f3.png";
import img4 from "../assets/f/f4.png";
import img5 from "../assets/f/f5.png";
import img6 from "../assets/f/f6.png";
import img7 from "../assets/f/f7.png";
import img8 from "../assets/f/f8.png";
import styles from '../screens/Home.module.css'
export default function Offers() {
    const offersList = [
        { id: "1", name: "Teeth Cleaning", price: 329, oldprice: 500, offers: "236 Offers", img: `${img1}` },
        { id: "2", name: "Facial Cleaning", price: 250, oldprice: 500, offers: "126 Offers", img:  `${img2}` },
        { id: "3", name: "Metal Braces", price: 7500, oldprice: 10000, offers: "7 Offers", img:  `${img3}`},
        { id: "4", name: "Face peeling", price: 200, oldprice: 400, offers: "13 Offers", img: `${img4}` },
        { id: "5", name: "Vitamin D", price: 150, oldprice: 938, offers: "3 Offers", img: `${img5}` },
        { id: "6", name: "Laser Hair Removal", price: 150, oldprice: 350, offers: "82 Offers", img: `${img6}` },
        { id: "7", name: "Weight Loss", price: 400, oldprice: 800, offers: "37 Offers", img: `${img7}` },
        { id: "8", name: "Vision Correction", price: 750, oldprice: 1500, offers: "27 Offers", img: `${img8}` },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const totalSlides = Math.ceil(offersList.length / itemsPerView);

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
  };

  return (
    <div className="slider-containerMain">
        <div className={styles['slider-container']}>
        <button className={`${styles['slider-button']} ${styles.prev}`}  onClick={() => moveSlide(-1)}>❮</button>
    <div className="d-flex justify-content-between p-4">
      <h1 style={{ fontWeight: 650, color: "grey" }}>Choose from top offers</h1>
      <h1><a href="#" style={{ fontSize: 16 }}>All Offers <i className="fa-solid fa-play text-danger" /></a></h1>
    </div>
    <div id="offers" className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {offersList.map(({ id, name, price, oldprice, img, offers }) => (
          <div key={id} id={`product-id-${id}`} className={styles.item}>
          <img src={img} alt={name} className="img-fluid" />
          <div className="details">
            <h6 className="fw-bolder" style={{ color: 'grey', fontWeight: 550 }}>{name}</h6>
            <div className={styles['price-quantity']}>
              <p className="text-muted" style={{ textDecoration: 'line-through' }}>{oldprice}EGP</p>
              <p style={{ color: '#327ac5' }}>{price}EGP</p>
            </div>
            <p style={{ fontSize: '14px', color: 'grey' }}>{offers}</p>
          </div>
        </div>
      ))}
    </div>
    <button className={`${styles['slider-button']} ${styles.next}`} onClick={() => moveSlide(1)}>❯</button>
    </div>
  </div>
  )
}
