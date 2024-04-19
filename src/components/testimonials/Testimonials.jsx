import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
         <article className='testimonial'>
            <div className="client__avatar">
              <img src="" alt="Avatar" />
            </div>
            <h5 className='client__name'>Engineer Kambang</h5>
              <small className='client__review'>
                Lorem isopf dolor sit contsection adipisicing elit.
                Lorem isopf dolor sit contsection adipisicing elit.
                Lorem isopf dolor sit contsection adipisicing elit.
              </small>
         </article>
      </div>
    
    </section>
  )
}

export default Testimonials