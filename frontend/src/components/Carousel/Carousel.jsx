import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, content: 'Slide 1', backgroundColor: '#ffcccc' },
    { id: 2, content: 'Slide 2', backgroundColor: '#ccffcc' },
    { id: 3, content: 'Slide 3', backgroundColor: '#ccccff' },
    { id: 4, content: 'Slide 4', backgroundColor: '#ffffcc' },
  ];

  // Add a clone of the first slide at the end for seamless looping
  const slidesWithClone = [...slides, slides[0]];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === slides.length) {
        // If we're at the clone (last slide), reset to the first slide without animation
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // If we're at the first slide, jump to the clone (last slide) without animation
        return slides.length;
      }
      return prev - 1;
    });
  };

  // Automatically advance the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Reset the transition when jumping from the clone to the first slide
  useEffect(() => {
    if (currentSlide === slides.length) {
      const timeout = setTimeout(() => {
        setCurrentSlide(0);
      }, 500); // Wait for the transition to complete before resetting

      return () => clearTimeout(timeout);
    }
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesWithClone.length)}%)`,
          transition: currentSlide === slides.length ? 'none' : 'transform 0.5s ease-in-out',
        }}
      >
        {slidesWithClone.map((slide, index) => (
          <div
            key={index} // Use index as key since the first slide is duplicated
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