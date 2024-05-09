import React from 'react'
import Hero from '../components/hero'
//import Header from '../components/header'
import About from '../components/about'
import Course from '../components/courses'
import Modelcarousel from '../components/carousel'
import Header1 from '../components/header1'
import Footer1 from '../components/footer'
import Testimonialcarousel from '../components/testimonialcarousel'


export default function Home() {
  return (
    <>
     <Header1 />
      <Hero />
      <About />
      <Course/>
      <Modelcarousel />
      <Testimonialcarousel />
     
      <Footer1/>
    </>
  )
}
