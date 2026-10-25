import React, { useState } from 'react';
import zhytomyrImg from '../zhytomyr.jpg';

function Image() {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [imageWidth, setImageWidth] = useState(600);

  const handleAdd = () => {
    if (!isImageVisible) {
      setIsImageVisible(true);
    } else {
      alert('Зображення вже присутнє на сторінці!');
    }
  };

  const handleIncrease = () => {
    if (isImageVisible) {
      setImageWidth((prevWidth) => prevWidth + 50);
    } else {
      alert('Спочатку додайте зображення!');
    }
  };

  const handleDecrease = () => {
    if (isImageVisible) {
      if (imageWidth > 100) {
        setImageWidth((prevWidth) => prevWidth - 50);
      } else {
        alert('Досягнуто мінімального розміру зображення!');
      }
    } else {
      alert('Спочатку додайте зображення!');
    }
  };

  const handleDelete = () => {
    if (isImageVisible) {
      setIsImageVisible(false);
    } else {
      alert('Зображення вже видалено!');
    }
  };

  return (
    <div className="image-container" id="img-wrapper">
      <p id="image-paragraph">
        {isImageVisible && (
          <a
            href="https://zt-rada.gov.ua"
            target="_blank"
            rel="noopener noreferrer"
            id="img-link"
          >
            <img
              src={zhytomyrImg}
              alt="Підвісний міст у Житомирі"
              id="city-image"
              style={{ width: `${imageWidth}px` }}
            />
          </a>
        )}
      </p>

      <div className="buttons-panel">
        <button id="btn-add" onClick={handleAdd}>Додати</button>
        <button id="btn-increase" onClick={handleIncrease}>Збільшити</button>
        <button id="btn-decrease" onClick={handleDecrease}>Зменшити</button>
        <button id="btn-delete" onClick={handleDelete}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;