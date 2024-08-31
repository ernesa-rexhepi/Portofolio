import React from 'react'
import style from "../style/style.module.css"

const ContactMe = () => {
  return (
    <>
    <div className={style.ContactSection} id='contact'>
        <h3>Get in <span>Touch</span></h3>
        <h1>Contact Me</h1>
        <div className={style.ContactForm}>
        <input type="text" className={style.Input} name="user-name" required placeholder='Enter Your Name...'/>
        <input type="email" className={style.Input} name="user-email" required placeholder='Enter Your Email...'/>
        <textarea className={style.TextArea} name="user-message" required placeholder='Enter Your Message...'/>
        <button className={style.InputButton}>Send Message</button>
        </div>
    </div>
    </>
  )
}

export default ContactMe

