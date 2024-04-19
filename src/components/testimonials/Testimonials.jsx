import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/Avt1.jpg'


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

      <div className="container testimonials__container">
         {
          data.map(({avatar, name, review}, index) => {
             return(
              <article key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={Avt1} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
           </article>
             )
          })
         }
      </div>
    
    </section>
  )
}

export default Testimonials