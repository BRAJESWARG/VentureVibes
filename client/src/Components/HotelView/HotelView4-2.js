import React, { useState } from "react";

const HotelView = () => {
  const images = [
    { original: "https://picsum.photos/id/237/600/300", thumbnail: "https://picsum.photos/id/237/100/50" },
    { original: "https://picsum.photos/id/1/600/300", thumbnail: "https://picsum.photos/id/1/100/50" },
    { original: "https://picsum.photos/id/10/600/300", thumbnail: "https://picsum.photos/id/10/100/50" },
    { original: "https://picsum.photos/id/100/600/300", thumbnail: "https://picsum.photos/id/100/100/50" },
    { original: "https://picsum.photos/id/101/600/300", thumbnail: "https://picsum.photos/id/101/100/50" },
    { original: "https://picsum.photos/id/1000/600/300", thumbnail: "https://picsum.photos/id/1000/100/50" },
    { original: "https://picsum.photos/id/1001/600/300", thumbnail: "https://picsum.photos/id/1001/100/50" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <button className="prev-button" onClick={handlePrev}>❮</button>
      <img src={images[currentIndex].original} alt="Main View" className="main-image" />
      <button className="next-button" onClick={handleNext}>❯</button>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onMouseEnter={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelView;
