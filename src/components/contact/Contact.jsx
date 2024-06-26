import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kef4v4s', 'template_5s58ad7', form.current, 'user_iLr2n9MagNxXXJm2E')
          e.target.reset()
      };
    
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
            <div className="contact__options">
               <article className='contact__option'>
               <MdOutlineMail className='contact__option-icon' />
                   <h4>Email</h4>
                   <h5>
                    bechem200@gmail.com
                    </h5>
                   <a 
                   href="mailto:bechem200@gmail.com" 
                   target='_blank'>Send a message</a>
               </article>
               <article className='contact__option'>
               <RiMessengerLine className='contact__option-icon'/>
                   <h4>Messenger</h4>
                   <h5>Nelson Bechem</h5>
                   <a href="https://m.me/NelsonBechem"  target='_blank'>Send a message</a>
               </article>
               <article className='contact__option'>
               <FaWhatsapp className='contact__option-icon'/>
                   <h4>WhatsApp</h4>
                   <h5>+237678251082</h5>
                   <a href="https://api.whatsapp.com/send?phone+237678251082"target='_blank'>Send a message</a>
               </article>
            </div>
       {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
      </div>

    </section>
  )
}

export default Contact