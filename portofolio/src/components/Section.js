import React from 'react'
import { FaInstagram ,FaGithub,FaLinkedin} from "react-icons/fa";
import style from "../style/style.module.css"
import Profile from "../assets/ErnesaProfile.jpg"
import { Link } from "react-router-dom";
const Section = () => {
  return (
  <>
<div className={style.Section}>
  <div className={style.SectionDescription}>
  <h3>Hello,<span> I'm</span></h3>
  <h1><span>Ernesa Rexhepi</span></h1>
  <h3>Software Developer</h3>
  <p>I hold a Bachelor's degree in Computer Science and Engineering, fulfilling a lifelong passion for programming that I've nurtured since childhood. With a strong foundation in computer science and practical experience in developing various projects, I am enthusiastic about contributing my skills to innovative software solutions. I am committed to continuous learning and growth, and I am prepared to tackle new challenges in the programming and software development field.</p>
  <button>Let's Talk</button>
  <div className={style.SectionSocial}>
      <Link to="https://www.instagram.com/_ernesarexhepi"> <FaInstagram size={25} className={style.SocialSigns}/></Link>
      <Link to="https://github.com/ernesa-rexhepi"><FaGithub size={25} className={style.SocialSigns}/></Link>
   <Link  to="https://www.linkedin.com/in/ernesa-rexhepi-aa3998293/"><FaLinkedin size={25}  className={style.SocialSigns}/></Link> 
    </div>
  </div>
  <div>
    <img src={Profile} alt="ErnesaProfile" className={style.SectionPic}/>
 </div>
 </div>
    </>
  )
}

export default Section