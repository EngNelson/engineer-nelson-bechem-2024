import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg';
import IMG1 from '../../assets/portfolio1.jpg';



// DO NOT USE THE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG,
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
           {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
      
              </article>
              )
            })
          }
      
    </div>
    </section>
  )
}

export default Portfolio