import React, { useState, useEffect } from 'react';
import './carousell.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, content: 'Slide 1', backgroundColor: '#ffcccc' },
    { id: 2, content: 'Slide 2', backgroundColor: '#ccffcc' },
    { id: 3, content: 'Slide 3', backgroundColor: '#ccccff' },
    { id: 4, content: 'Slide 4', backgroundColor: '#ffffcc' },
  ];

  const nextSlide = () => {
  setCurrentSlide((prev) => prev >= slides.length - 1 ? 0 : prev + 1);
};

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatically advance the slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]); // Re-run effect when currentSlide changes

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            {slide.content}
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