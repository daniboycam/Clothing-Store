// components/MeuCarrossel.jsx

'use client' 

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import pijamaImg1 from '../../public/Pijama1.jpg'
import pijamaImg2 from '../../public/PIjama2.jpg'
import Natal1 from '../../public/Natal1.jpg'
import Natal2 from '../../public/Natal2.jpg'
import Natal3 from '../../public/Natal3.jpg'
import Costura1 from '../../public/Costura1.jpg'
import Vestido1 from '../../public/Vestido1.jpg'
import Vestido2 from '../../public/Vestido2.jpg'
import Vestido3 from '../../public/Vestido3.jpg'

const slideImages = [pijamaImg1, pijamaImg2, Natal1, Natal2, Natal3, Costura1, Vestido1, Vestido2, Vestido3];
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