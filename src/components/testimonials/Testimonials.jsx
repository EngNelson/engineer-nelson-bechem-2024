import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/Avt1.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Avt1,
    name: 'Engineer Kambang',
    review: 
    ' Lorem isopf dolor sit contsection adipisicingelitLorem isopf dolor sit contsection adipisicing elit'
  },
  {
    avatar: Avt1,
    name: 'Engineer Kambang',
    review: 
    ' Lorem isopf dolor sit contsection adipisicingelitLorem isopf dolor sit contsection adipisicing elit'
  },
  {
    avatar: Avt1,
    name: 'Engineer Kambang',
    review: 
    ' Lorem isopf dolor sit contsection adipisicingelitLorem isopf dolor sit contsection adipisicing elit'
  },
  {
    avatar: Avt1,
    name: 'Engineer Kambang',
    review: 
    ' Lorem isopf dolor sit contsection adipisicingelitLorem isopf dolor sit contsection adipisicing elit'
  },

]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // Swiper Modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      Pagination={{clickable: true}}
      >


         {
          data.map(({avatar, name, review}, index) => {
             return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={Avt1} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
           </SwiperSlide>
             )
          })
         }
      </Swiper>
    
    </section>
  )
}

export default Testimonials