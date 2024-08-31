import React from 'react';
import style from "../style/style.module.css";
import { FaReact, FaHtml5, FaCss3, FaJava, FaPhp } from "react-icons/fa";
import { SiDotnet, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div className={style.SkillSection} id='skills'>
      <h1>Favorite<span> Skills</span></h1>
      <h2>My Skills</h2>
      <p>Skilled in multiple programming languages, I specialize in creating and developing dynamic web pages and software applications. I focus on designing, coding, and optimizing pages for functionality and visual appeal.</p>
      <div className={style.SkillsIcons}>
        <FaReact size={40} className={style.LanguageIcons} />
        <FaHtml5 size={40} className={style.LanguageIcons}/>
        <FaCss3 size={40} className={style.LanguageIcons}/>
        <SiDotnet size={40} className={style.LanguageIcons} />
        <SiMysql size={40} className={style.LanguageIcons}/>
        <IoLogoJavascript size={40} className={style.LanguageIcons} />
        <FaJava size={40} className={style.LanguageIcons}/>
        <FaPhp size={40} className={style.LanguageIcons}/>
        
      </div>
    </div>
  );
};

export default Skills;
