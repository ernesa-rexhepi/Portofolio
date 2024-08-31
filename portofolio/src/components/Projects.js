import React from 'react'
import style from "../style/style.module.css"
import project1 from "../assets/Project1.JPG"
import project2 from "../assets/project2.JPG"
import project3 from "../assets/project3.jpeg"
import project4 from "../assets/project3.JPG"
import project5 from "../assets/project4.jpeg"
import project6 from "../assets/project5.jpeg"

const Projects = () => {
  return (
   <>
    <div className={style.ProjectSection} id='projects'>
        <h1>My<span> Project</span></h1>
        <div className={style.ProjectPictureSection}>
           <img src={project1}  alt={project1} className={style.ProjectPicture}/> 
          <img src={project2}  alt={project2} className={style.ProjectPicture} /> 
        <img src={project3}  alt={project3} className={style.ProjectPicture} /> 
       <img src={project4}  alt={project4} className={style.ProjectPicture} /> 
       <img src={project5}  alt={project5} className={style.ProjectPicture}/> 
        <img src={project6}  alt={project6} className={style.ProjectPicture}/>
        </div>
    </div>
   </>
  )
}

export default Projects