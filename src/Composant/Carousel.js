import React, { useState } from "react";
import "../css/style.css";
import imgLeft from "../images/arrow_back.png";
import imgRight from "../images/arrow_forward.png";

const Carousel = ({ images }) => {
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

  let multipleImg = true;
  if (images.length <= 1) {
    multipleImg = false;
  }

  return (
    <div className="global">
      <div className="carousel">
        {multipleImg && (
          <button className="buttonLeft" onClick={goToPrevious}>
            <img src={imgLeft} alt="flèche gauche" />
          </button>
        )}
        <img src={images[currentIndex]} alt="" />
        {multipleImg && (
          <button className="buttonRight" onClick={goToNext}>
            <img src={imgRight} alt="flèche droite" />
          </button>
        )}
        {multipleImg && (
          <div className="indicators">
            <p>
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
