import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HighLights from '../components/HighLights'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
    
        <Nav/>
    <main>
        <HeroSection/>
        <HighLights />
        <Specials />
        <Testimonials />
        
    </main>
        <Footer/>
    </>
  )
}

export default Home