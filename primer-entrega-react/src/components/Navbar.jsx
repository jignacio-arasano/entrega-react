import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">MileiWeb</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Inicio</a>
          <a href="#" className="text-white hover:text-gray-300">Acerca de</a>
          <a href="#" className="text-white hover:text-gray-300">Servicios</a>
          <a href="#" className="text-white hover:text-gray-300">Contacto</a>
        </div>
      </div>
    </div>
  </nav>
  )
  
}

export default Navbar