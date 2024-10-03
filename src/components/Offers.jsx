import React,{ useState, useEffect } from 'react'

export default function Offers() {
    const offersList = [
        { id: "1", name: "Teeth Cleaning", price: 329, oldprice: 500, offers: "236 Offers", img: "../public/f/f1.png" },
        { id: "2", name: "Facial Cleaning", price: 250, oldprice: 500, offers: "126 Offers", img: "../public/f/f2.png" },
        { id: "3", name: "Metal Braces", price: 7500, oldprice: 10000, offers: "7 Offers", img: "../public/f/f3.png" },
        { id: "4", name: "Face peeling", price: 200, oldprice: 400, offers: "13 Offers", img: "../public/f/f4.png" },
        { id: "5", name: "Vitamin D", price: 150, oldprice: 938, offers: "3 Offers", img: "../public/f/f5.png" },
        { id: "6", name: "Laser Hair Removal", price: 150, oldprice: 350, offers: "82 Offers", img: "../public/f/f6.png" },
        { id: "7", name: "Weight Loss", price: 400, oldprice: 800, offers: "37 Offers", img: "../public/f/f7.png" },
        { id: "8", name: "Vision Correction", price: 750, oldprice: 1500, offers: "27 Offers", img: "../public/f/f8.png" },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const totalSlides = Math.ceil(offersList.length / itemsPerView);

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
  };

  return (
    <div className="slider-containerMain">
        <div className='slider-container'>
        <button className="slider-button prev" onClick={() => moveSlide(-1)}>❮</button>
    <div className="d-flex justify-content-between p-4">
      <h1 style={{ fontWeight: 650, color: "grey" }}>Choose from top offers</h1>
      <h1><a href="#" style={{ fontSize: 16 }}>All Offers <i className="fa-solid fa-play text-danger" /></a></h1>
    </div>
    <div id="offers" className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {offersList.map(({ id, name, price, oldprice, img, offers }) => (
          <div key={id} id={`product-id-${id}`} className="item">
          <img src={img} alt={name} className="img-fluid" />
          <div className="details">
            <h6 className="fw-bolder" style={{ color: 'grey', fontWeight: 550 }}>{name}</h6>
            <div className="price-quantity">
              <p className="text-muted" style={{ textDecoration: 'line-through' }}>{oldprice}EGP</p>
              <p style={{ color: '#327ac5' }}>{price}EGP</p>
            </div>
            <p style={{ fontSize: '14px', color: 'grey' }}>{offers}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="slider-button next" onClick={() => moveSlide(1)}>❯</button>
    </div>
  </div>
  )
}
