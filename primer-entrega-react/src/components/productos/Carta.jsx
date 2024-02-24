import React from 'react'

function Carta({name, url}) {
  return (
<div class="flex items-center flex-col justify-center w-72 h-72 rounded-xl overflow-hidden shadow-lg bg-black text-white m-4 p-4">
  <div class="w-full h-40 overflow-hidden">
    <img class="w-full h-full object-cover" src={url} alt={name} />
  </div>
  <div class="flex items-center justify-center w-full h-32 px-6 py-4">
    <div class="font-bold text-xl">{name}</div>
  </div>
</div>




  )
}

export default Carta