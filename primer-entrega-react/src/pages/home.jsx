import React from 'react'
import { NavbarProvider } from '../components/navbarContext'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cartas from '../components/productos/Cartas'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    
    <Hero/>
    <Cartas/>
    <Footer/>
    </>
  )
}

export default Home