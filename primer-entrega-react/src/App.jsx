


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cartas from './components/productos/Cartas'
import Footer from './components/Footer'
import { NavbarProvider } from './components/navbarContext'
function App() {

  return (
    <>
    <NavbarProvider>
      <div>
        <Navbar />
        {/* Resto de tu aplicación */}
      </div>
    </NavbarProvider>
    
    <Hero/>
    <Cartas/>
    <Footer/>
    </>
  )
}
export default App;