"use client";
import Navbar from '../Navbar'
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import HeroInfo from './HeroInfo';


const heroText = [
    { text: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", link: "#", class: "text-white" },
    { text: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", link: "#", class: "text-black" }
]

const HeroSection = () => {

    const [swiperInstance, setSwiperInstance] = useState(null);

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className='flex justify-center items-center w-full text-white '>
            <div className=' h-[850px] screen8:h-[703px] relative w-full mx-auto'>

                <Navbar />
                <Swiper
                    loop={true}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    modules={[Navigation]}
                    className="mySwiper w-full h-full mx-auto"
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

                >
                    <SwiperSlide>
                        <HeroInfo heroText={heroText[0]} />
                        <Image src={"/image/HeroImage1.png"} width={1474} height={963} className="w-[966px] h-[644px] screen8:w-[1477px] screen8:h-[983px] absolute top-[200px]  screen8:top-0  screen8:left-0 object-cover" unoptimized />
                    </SwiperSlide>

                    <SwiperSlide style={{
                        backgroundImage: "url('/image/HeroImage2.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <HeroInfo heroText={heroText[1]} />
                    </SwiperSlide>

                    <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer  z-10">
                        <Image src="/icon/home/HeroLeft.svg" alt="Logo" width={24} height={24} className='w-[24px] h-[24px] mr-2 screen11:mr-8 ' />
                    </div>
                    <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer  z-10">
                        <Image src="/icon/home/HeroRight.svg" alt="Logo" width={24} height={24} className='w-[24px] h-[24px] mr-2 screen11:mr-8 ' />
                    </div>



                </Swiper>
                <div className="
  absolute 
  bottom-[450px] 
  screen8:bottom-[100px] 
  left-1/2 -translate-x-1/2  // küçük ekranlarda ortala
  flex items-center gap-4 z-50
  md:left-auto md:translate-x-0 md:right-[630px] // md ve üstünde sağa yasla
">
                    {heroText.map((item, index) => (
                        <button
                            key={index}
                            // Tıklandığında ilgili slayta gitmesini sağlıyoruz (loop modunda slideToLoop kullanılır)
                            onClick={() => swiperInstance?.slideToLoop(index)}
                            // Aktif olan barın stilini farklılaştırıyoruz
                            className={`h-1.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${activeIndex === index ? 'bg-[#F0E74D] w-3 h-3' : 'bg-[#1E1E1E] w-2 h-2'
                                }`}
                        >
                        </button>
                    ))}
                </div>





                <Image src={"/image/HeroVector.png"} width={1800} height={560} className='w-full h-[250px] absolute bottom-0  z-10 select-none' />
            </div>
        </section>
    )
}

export default HeroSection;