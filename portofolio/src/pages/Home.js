import React from 'react'
import Header from "../components/Header"
import About from "../components/About"
import Skills from "../components/Skills"
import Section from "../components/Section"
import Projects from "../components/Projects"
import {Contact} from "../components/Contact.jsx"
import Footer from "../components/Footer.js"
const Home = () => {
  return (
 <>
    <Header/>
    <Section/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home