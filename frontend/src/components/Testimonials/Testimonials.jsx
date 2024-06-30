// Testimonials.jsx
import React, { useEffect, useState } from 'react';
import "./Testimonials.css";

import image1 from '../../assets/images/lays.webp';
import image2 from '../../assets/images/drink.jpg';
import image3 from '../../assets/images/vegetable.jpg';
import image4 from '../../assets/images/fruit.jpg';

import poster1 from '../../assets/images/poster1.jpg';
import poster2 from '../../assets/images/poster2.jpg';
import poster3 from '../../assets/images/poster3.jpg';
import poster4 from '../../assets/images/poster4.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const titles = ["", "", "Hoa quả tươi", "Trái cây tươi"];
  const posters = [poster1, poster2, poster3, poster4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials">
        {images.map((image, index) => (
          <div
            key={index}
            className={`testimonial-item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Testimonial ${index + 1}`} />
            <div className={`testimonial-title ${index === currentIndex ? "active" : ""}`}>
              {titles[index]}
            </div>
          </div>
        ))}
      </div>
      <div className="posters">
        {posters.map((image, index) => (
          <div key={index} className={`poster-item ${index === currentIndex ? "active" : ""}`}>
            <img src={image} alt={`Poster ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
