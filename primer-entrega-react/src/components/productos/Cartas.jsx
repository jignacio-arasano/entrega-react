import React from 'react'
import { productos } from '../../data/products'
import Carta from './Carta'
function Cartas() {
  return (
    <div className="flex flex-wrap justify-center  bg-yellow-200">
      {productos.map(prod => (
        <Carta key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default Cartas