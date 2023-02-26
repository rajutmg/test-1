import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import "swiper/swiper-bundle.css";
import "./swiperStyle.css";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const Slider_swiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
          style={{ listStyle: "none" }}
        />
      </SwiperSlide>
    );
  }
  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
          style={{ listStyle: "none" }}
        />
      </SwiperSlide>
    );
  }
  const slides1 = [];
  for (let i = 9; i < 14; i += 1) {
    slides1.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
          style={{ listStyle: "none" }}
        />
      </SwiperSlide>
    );
  }
  return (
    <div>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper Initilized")}
        onSlideChange={(swiper) =>
          console.log("Slide Index Change to", swiper.activeIndex)
        }
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={2}
        slidesPerView={4}
        id="thumbs"
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>
      <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides1}
      </Swiper>
    </div>
  );
};

export default Slider_swiper;
