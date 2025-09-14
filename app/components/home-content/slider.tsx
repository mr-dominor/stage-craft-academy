'use client'
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const slider = {
    img1:{url:"/mine/lappy/img1.jpg"},
    img2:{url:"/mine/lappy/img-2.jpg"},
    img3:{url:"/mine/lappy/img-3.jpg"},
};
const Slider = () =>{
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
             <div className="w-full mx-auto  ">
                <Swiper
                id="hero-swiper"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onSlideChange={(s)=> setActiveIndex(s.realIndex)}
                >
                    {Object.values(slider).map((l,k)=>{
                        return(
                            <SwiperSlide key={k}>
                                <div className="relative flex items-center justify-center h-96 md:h-[600px] w-full rounded-lg overflow-hidden bg-red-300">
                                    <Image 
                                    src={`${l.url}`}
                                    alt={`${k}`}
                                    fill
                                    className={`object-cover ${
                  activeIndex === k
                    ? "animate-[zoom-in_4s_linear_forwards]"
                    : ""
                }`}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

export default Slider;