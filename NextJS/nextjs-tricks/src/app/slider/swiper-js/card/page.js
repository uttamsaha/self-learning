"use client";
import SingleItem from "@/app/slider/swiper-js/card/components/SingleItem";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const SwiperJs = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const items = [
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
    {
      name: "Chips",
      price: 20,
      exp: "21 jun 2025",
    },
  ];

  return (
    <div className="w-[1000px]">
      <Swiper
         onSwiper={setSwiperRef}
         slidesPerView={3}
         centeredSlides={false}
         spaceBetween={30}
         pagination={{
           type: 'fraction',
         }}
         navigation={true}
         modules={[ Navigation]}
         className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <SingleItem item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperJs;
