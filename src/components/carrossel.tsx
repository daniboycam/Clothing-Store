// components/MeuCarrossel.jsx

'use client' 

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import dressImg1 from '../../public/teste1.png'
import dressImg2 from '../../public/teste2.jpg'
import dressImg3 from '../../public/teste3.jpeg'
import dressImg4 from '../../public/teste4.jpeg'
import dressImg5 from '../../public/teste5.jpeg'
import dressImg6 from '../../public/teste6.jpeg'

const slideImages = [dressImg1, dressImg2, dressImg3, dressImg4, dressImg5, dressImg6];

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