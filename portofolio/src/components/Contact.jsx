import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from "../style/style.module.css"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_98dji0h', 'template_f49jx3i', form.current, {
        publicKey: 'hl5ZIcOG5QefKYnKm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>

<div className={style.ContactSection} id='contact'>
        <h3>Get in <span>Touch</span></h3>
        <h1>Contact Me</h1>
        <div className={style.ContactForm}>
        <input type="text" className={style.Input} name="from_name" required placeholder='Enter Your Name...'/>
        <input type="email" className={style.Input} name="from_email" required placeholder='Enter Your Email...'/>
        <textarea className={style.TextArea} name="message"  required placeholder='Enter Your Message...'/>
        <input type="submit" value="Send" className={style.InputButton}/>
        </div>
        
    </div>
    </form>
  );
};
export default Contact