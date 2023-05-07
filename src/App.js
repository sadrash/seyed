import React from 'react'

import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Card from './components/cards/card'
import About from './components/about/About'

import Projects from './components/projects/projects'
import Insta from './components/insta/insta'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App () {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Card/>
      <About/>
    
      <Projects/>
      <Insta/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;