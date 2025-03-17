import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import { FreeMode, Mousewheel } from "swiper/modules";

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
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        mousewheel={true}
        modules={[FreeMode, Mousewheel]}
        className="thumbnails"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onMouseEnter={() => setCurrentIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelView;
