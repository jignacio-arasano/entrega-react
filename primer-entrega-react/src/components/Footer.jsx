import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 flex justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Mi Sitio Web</h2>
          <p className="text-sm">¡Conéctate con nosotros en las redes sociales!</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Twitter
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Enlaces Útiles</h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Términos y Condiciones
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Política de Privacidad
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Contacto
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Suscríbite</h2>
          <p className="text-sm mb-2">Recibi nuestras las ultimas noticias de Milei.</p>
        </div>
      </div>
      <div className="bg-black py-2 text-sm text-center">
        &copy; {new Date().getFullYear()} Milei Web. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer