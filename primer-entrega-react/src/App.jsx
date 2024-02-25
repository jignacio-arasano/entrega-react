
import Home from './pages/home'
import About from './pages/about';
import Store from './pages/store';
import Navbar from './components/Navbar';
import { NavbarProvider } from './components/navbarContext';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <NavbarProvider>
      <div>
        <Navbar />
      </div>
    </NavbarProvider>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<Store/>}/>
      <Route path="/store" element={<About/>}/>

      
    </Routes>
    </>
  )
}
export default App;