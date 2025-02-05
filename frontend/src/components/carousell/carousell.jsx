import React, { useState, useEffect } from 'react';
import './carousell.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, imageUrl: 'https://picsum.photos/800/400?random=1' },
    { id: 2, imageUrl: 'https://picsum.photos/800/400?random=2' },
    { id: 3, imageUrl: 'https://picsum.photos/800/400?random=3' },
    { id: 4, imageUrl: 'https://picsum.photos/800/400?random=4' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => prev >= slides.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.imageUrl} alt={slide.id} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

