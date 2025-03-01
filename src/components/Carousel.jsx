import React, { useState , useEffect} from 'react';
import './Carousel.css'; // Import some basic styling

const Carousel = (props) => {
  const {images} = props;

    
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>‹</button>
      <div className="carousel-slide">
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>
      <button className="carousel-button next" onClick={goToNext}>›</button>
    </div>
  );
};

export default Carousel;
