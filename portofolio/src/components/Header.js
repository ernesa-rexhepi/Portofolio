import React, { useState } from "react";
import style from "../style/style.module.css"
// import { Link } from "react-router-dom";
import {Link } from "react-scroll"
import { MdMenu, MdClose } from "react-icons/md";
const Header = () => {
    const [mobile, setMobile] = useState(false);
  return (
    <div className={style.Header}>
        <nav className={style.navContainer}>
         
            <div className={style.NavLogoMenu}>
<p className={style.NavLogo}>E</p>
<p className={style.NavName}>Ernesa<span> Rexhepi</span></p>
            </div>
            <div className={style.NavMenu}>
                <ul className={style.NavList}>
                    <li className={style.NavItem}>
                        <Link to="/" spy={true} smooth={true} offset={50} duration={500} class={style.NavLink}>Home</Link>
                    </li>
                    <li className={style.NavItem}>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} class={style.NavLink}>About me</Link>
                    </li>
                    <li className={style.NavItem}>
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} class={style.NavLink}>Skills</Link>
                    </li>
                    <li className={style.NavItem}>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} class={style.NavLink}>Projects</Link>
                    </li>
                    <li className={style.NavItem}>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} class={style.NavLink}>Contact me</Link>
                    </li>
                </ul>
                </div>
                
                {!mobile ? (
            <MdMenu
              size={30}
              onClick={() => {
                setMobile(!mobile);
              }}
              className={style.openCloseIcons}
            />
          ) : (
            <MdClose
              size={30}
              onClick={() => {
                setMobile(!mobile);
              }}
              className={style.openCloseIcons}
            />
            )}
           {mobile ? (
        <div className={style.mobileNavbar}>
          {/* <Link to="/">
            <img src={logo} alt="Logo" className={style.navLogo} />
          </Link> */}
          <Link to="/#" className={style.mobileLinks}>
            Home
          </Link>
          <Link to="/aboutme" className={style.mobileLinks}>
            About me
          </Link>
          <Link to="/skills" className={style.mobileLinks}>
            Skills
          </Link>
          <Link to="/projects" className={style.mobileLinks}>
            Projects
          </Link>
          <Link to="/contactme" className={style.mobileLinks}>
            Contact 
          </Link>
        </div>
      ) : (
        <></>
      )}
  
           
        </nav>

    </div>
  )
}

export default Header