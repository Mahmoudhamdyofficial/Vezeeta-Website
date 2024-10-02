import React,{ useState, useEffect } from 'react'

export default function Specialities() {
    const specialtiesList = [
        { id: "1", name: "Skin", img: "../public/s/s1.jpg" },
        { id: "2", name: "Teeth", img: "../public/s/s2.jpg" },
        { id: "3", name: "Mental Disorders", img: "../public/s/s3.webp" },
        { id: "4", name: "Child", img: "../public/s/s4.webp" },
        { id: "5", name: "Brain & Nerves", img: "../public/s/s5.jpg" },
        { id: "6", name: "Bones", img: "../public/s/s6.webp" },
        { id: "7", name: "Gynatology and Infertility", img: "../public/s/s7.webp" },
        { id: "8", name: "Ear, Nose and Throat", img: "../public/s/s8.webp" },
      ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 5;
    const totalSlides = Math.ceil(specialtiesList.length / itemsPerView);
  
    const moveSlide = (direction) => {
      setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
    };
  return (
    <div className="slider-containerMain">
    <div className="slider-container">
      <button className="slider-button prev" onClick={() => moveSlide(-1)}>❮</button>
      <div className="slider-wrapper" style={{ backgroundColor: "#eef0f2" }}>
        <div className="d-flex justify-content-between p-4">
          <h1 style={{ fontWeight: 650, color: "grey" }}>Book from top specialties</h1>
        </div>
        <div id="offersSecond" className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {specialtiesList.map(({ id, name, img }) => (
            <div key={id} id={`product-id-${id}`} className="item">
              <img src={img} alt={name} className="img-fluid" />
              <div className="details">
                <h6 className="fw-bolder" style={{ color: 'grey', fontWeight: 550 }}>{name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button next" onClick={() => moveSlide(1)}>❯</button>
    </div>
  </div>
  )
}
