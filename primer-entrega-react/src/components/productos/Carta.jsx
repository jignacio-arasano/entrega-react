import React from 'react'

function Carta({name, url}) {
  return (
<div className="flex items-center flex-col justify-center max-w-xs max-h-xs rounded-xl overflow-hidden shadow-lg bg-black text-white m-4 p-4">
<div className="w-40 h-40 overflow-hidden mx-auto">
  <img className="w-full h-full object-cover" src={url} alt={name} />
</div>
  <div className="flex items-center justify-center h-screen w-80 h-14 px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
  </div>
</div>



  )
}

export default Carta