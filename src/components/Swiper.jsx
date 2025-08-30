import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function GaleriaMasonry() {
    return (
        <div className="p-6">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Galería ${i + 1}`}
                        className="w-full rounded-2xl mb-4 shadow-md object-cover hover:scale-105 transition-transform duration-300"
                        style={{ breakInside: "avoid" }}
                    />
                ))}
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-auto object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                effect="fade"
                modules={[EffectFade]}
                loop={true}
                pagination={{ clickable: true }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-auto object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    );
}