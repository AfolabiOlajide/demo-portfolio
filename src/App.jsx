import React from 'react'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience /> 
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App