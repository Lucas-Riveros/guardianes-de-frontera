import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
    "/images/placeholder2.jpg",
    "/images/placeholder4.webp",
    "/images/placeholder6.jpeg",
    "/images/placeholder7.jpeg",
    "/images/placeholder8.jpeg",
];

export default function Galeria() {
    return (
        <div className="p-6 py-25">
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
                            <img
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}