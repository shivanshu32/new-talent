import React from 'react'
// import Hero from '../components/hero'
import Header from '../components/header'
// import About from '../components/about'
// import Course from '../components/courses'
// import Modelcarousel from '../components/carousel'
import Footer1 from '../components/footer'
import PageantTrainingHero from '../components/pthero'
import PageantCourseDetail from '../components/ptcoursedetail'
import PageantTrainingPrograms from '../components/ptprograms'
import PageantTrainingContact from '../components/ptcontact'
import TheMentor from '../components/thementor'
import Testimonials from '../components/testimonialcarousel'

export default function PageantTraining() {
  return (
    <>
     <Header />
     <PageantTrainingHero />
     <PageantCourseDetail />
     <PageantTrainingContact />
     <PageantTrainingPrograms />
     <TheMentor />
     <Testimonials />
    
    
      <Footer1/>
    </>
  )
}
