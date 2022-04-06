import React from 'react';
import { BsMailbox2 } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsMailbox2 className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>fatnandosena@gmail.com</h5>
            <a href="mailto:fatnandosena@gmail.com" target="_blank" rel="noreferrer">Send a mensage</a>
          </article>
          <article className="contact__option">
            <TiSocialLinkedinCircular className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/fernandosenacruz/" target="_blank" rel="noreferrer">Send a mensage</a>
          </article>
        </div>
        <form action="">
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email or Social Mideas" required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
