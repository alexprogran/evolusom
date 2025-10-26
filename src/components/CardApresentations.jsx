import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CardApresentations.css';

const CardApresentations = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
        <ChevronLeft size={40} />
      </button>
      
      <div className="carousel-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${card.imagem})` }}
          >
            <div className="card-overlay"></div>
            <h3 className="card-title">{card.titulo}</h3>
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
        <ChevronRight size={40} />
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardApresentations;
