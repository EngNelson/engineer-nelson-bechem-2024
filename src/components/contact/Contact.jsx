import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
            <div className="contact__options">
               <article className='contact__option'>
               <MdOutlineMail />
                   <h4>Email</h4>
                   <h5>bechem200@gmail.com</h5>
                   <a href="mailto:bechem200@gmail.com" target='_blank'>Send a message</a>
               </article>
               <article className='contact__option'>
               <RiMessengerLine />
                   <h4>Messenger</h4>
                   <h5>Nelson Bechem</h5>
                   <a href="https://m.me/NelsonBechem"  target='_blank'>Send a message</a>
               </article>
               <article className='contact__option'>
               <FaWhatsapp />
                   <h4>WhatsApp</h4>
                   <h5>+237678251082</h5>
                   <a href="https://api.whatsapp.com/send?phone+237678251082"target='_blank'>Send a message</a>
               </article>
            </div>
       {/* END OF CONTACT OPTIONS */}
            <form action="">
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