import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg';
import IMG1 from '../../assets/portfolio1.jpg';



// DO NOT USE THE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Car Rental Services',
    github: 'https://github.com',
    demo: "https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance"
  },
  {
    id: 2,
    image: IMG1,
    title: 'Hospital Management System',
    github: 'https://github.com',
    demo: "https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance"
  },
  {
    id: 3,
    image: IMG1,
    title: 'Hotel Management System',
    github: 'https://github.com',
    demo: "https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance"
  },
  {
    id: 4,
    image: IMG1,
    title: 'Financial Dashbord',
    github: 'https://github.com',
    demo: "https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance"
  },
  {
    id: 5,
    image: IMG1,
    title: 'Real Estate Managemen',
    github: 'https://github.com',
    demo: "https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance"
  },
  {
    id: 6,
    image: IMG1,
    title: 'School Management System',
    github: 'https://github.com',
    demo: "https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance"
  },
]

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
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a hrf="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
  
          </article>
          {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>Hospital Management System</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>Hotel Management System</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>Financial Dashbord </h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>Real Estate Management</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="" />
            </div>
            <h3>School Management System</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/designers?search[category]=Web%20design&search[workType]=freelance" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article> */}
    </div>
    </section>
  )
}

export default Portfolio