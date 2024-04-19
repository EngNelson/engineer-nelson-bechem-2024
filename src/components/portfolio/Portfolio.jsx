import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg';
import IMG1 from '../../assets/portfolio1.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="" />
            </div>
            <h3>Car Rental Services</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>Hospital Management System</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>Hotel Management System</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>Financial Dashbord </h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>Real Estate Management</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>School Management System</h3>
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
  l  </div>
    </section>
  )
}

export default Portfolio