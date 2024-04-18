import React from 'react'
import './services.css'
import { RiCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <section>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__contact">
         <article className='service'>
                  <div className="service__head">
                     <h3>DevOps</h3>
                  </div>

                  <ul className='service__list'>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                  </ul>
         </article>
         {/* END OF DEVOPS */}
         <article className='service'>
                  <div className="service__head">
                     <h3>Web Development</h3>
                  </div>

                  <ul className='service__list'>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                  </ul>
         </article>
         {/* END OF WEB DEVELOPMENT */}
         <article className='service'>
                  <div className="service__head">
                     <h3>Data Science</h3>
                  </div>

                  <ul className='service__list'>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                        <li>
                          <RiCheckLine  className='service__list-icon'/>
                          <p>Lorem, ispod dolor sit amet consecteture alit.</p>
                        </li>
                  </ul>
         </article>
         
      </div>
      

    </section>
  )
}

export default Services