
import React, { useEffect, useRef, useState } from 'react';
import '../index.css';

const GallerySection = ({
  title,
  description,
  images,
  sliderImages,
  reversedImages,
  reversedSliderImages
}) => {
  const [current, setCurrent] = useState(0);
  const gridsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    gridsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      gridsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">{title}</h2>
      <p className="gallery-description">{description}</p>

      {/* Top Grid */}
      <div className="gallery-grid" ref={el => (gridsRef.current[0] = el)}>
        <img src={images[0]} alt="1" className="gallery-img" />
        <img src={images[1]} alt="2" className="gallery-img" />
        <div className="slider-container">
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {sliderImages.map((src, idx) => (
              <img key={idx} src={src} className="slider-image" alt={`slide-${idx}`} />
            ))}
          </div>
        </div>
        <img src={images[2]} alt="4" className="gallery-img" />
        <img src={images[3]} alt="5" className="gallery-img" />
      </div>

      {/* Reversed Grid */}
      <div className="gallery-grid reversed" ref={el => (gridsRef.current[1] = el)}>
        <img src={reversedImages[0]} alt="1" className="gallery-img" />
        <img src={reversedImages[1]} alt="2" className="gallery-img" />
        <div className="slider-container">
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {reversedSliderImages.map((src, idx) => (
              <img key={idx} src={src} className="slider-image" alt={`reversed-slide-${idx}`} />
            ))}
          </div>
        </div>
        <img src={reversedImages[2]} alt="4" className="gallery-img" />
        <img src={reversedImages[3]} alt="5" className="gallery-img" />
      </div>
    </section>
  );
};

export default GallerySection;
