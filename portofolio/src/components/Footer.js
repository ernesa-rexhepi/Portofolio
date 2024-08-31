import React from 'react'
import style from "../style/style.module.css"
import { FaInstagram ,FaGithub,FaLinkedin,FaArrowCircleUp} from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <div className={style.FooterSection}>
    <button onClick={scrollToTop} className={style.ScrollUpButton}><FaArrowCircleUp size={40} color='white' /></button>
        <h1>Ernesa Rexhepi</h1>
        <span>Software Developer</span>
        <div className={style.FooterSocial}>
      <Link to="https://www.instagram.com/_ernesarexhepi"> <FaInstagram size={25} className={style.FooterSigns}/></Link>
      <Link to="https://github.com/ernesa-rexhepi"><FaGithub size={25} className={style.FooterSigns}/></Link>
   <Link  to="https://www.linkedin.com/in/ernesa-rexhepi-aa3998293/"><FaLinkedin size={25}  className={style.FooterSigns}/></Link> 
    </div>
        <a href="mailto:ernesarexhepii@gmail.com">Email:ernesarexhepii@gmail.com</a>
        <p>Telephone Number:049283566</p>
        <h5>&#169;Coppyright ErnesaRexhepi.All Rights reserved</h5>
    </div>
     </>
  )
}

export default Footer