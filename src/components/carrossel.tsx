// components/MeuCarrossel.jsx

'use client' 

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import pijamaImg1 from '../../public/pijama1.png'
import pijamaImg2 from '../../public/pijama2.png'
import pijamaImg3 from '../../public/pijama3.png'
import pijamaImg4 from '../../public/pijama4.png'
import pijamaImg5 from '../../public/pijama5.png'
import pijamaImg6 from '../../public/pijama6.png'

const slideImages = [pijamaImg1, pijamaImg2, pijamaImg3, pijamaImg4, pijamaImg5, pijamaImg6];

export function MeuCarrossel() {
  return (
    <Swiper
      modules = {[Navigation, Pagination]}
      navigation = {true}
      pagination = {{ clickable: true }}
      loop = {true} 
      
      breakpoints = {{
        320: {
          slidesPerView: 1, 
          spaceBetween: 20  
        },
       
        768: {
          slidesPerView: 2, 
          spaceBetween: 30
        },
       
        1024: {
          slidesPerView: 3, 
          spaceBetween: 30
        }
      }}
      
      className = "meu-carrossel w-full"
    >
      {slideImages.map((imgSrc, index) => (
        <SwiperSlide key={index}>

          <div className = "relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image 
              src = {imgSrc} 
              alt = {`Foto de vestido ${index + 1}`}
              fill
              quality = {100}
              className = "object-contain" 
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}