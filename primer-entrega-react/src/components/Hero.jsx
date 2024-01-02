import React from 'react'

function Hero() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center filter brightness-75 contrast-125" style={{ backgroundImage: "url('https://statics.eleconomista.com.ar/2023/04/643879778f44d.png')" }}>
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold mb-4 leading-tight text-shadow-md">Bienvenido a las fuerzas del cielo</h1>
      <p className="text-lg mb-8 leading-tight text-shadow-md">Descubri lo que tenemos para ofrecerte</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explorar
      </button>
      
    </div>
  </div>
  )
}

export default Hero