import React from 'react'

// Menggunakan Const
// const harga = 10000;

// Menggunakan var
// var harga = 20000;
// if(true){
//     var harga = 20000*2;
// }

// Menggunakan Let
let harga = 20000;
if(true){
    harga = 20000*2;
}


const Variabel = () => {
  return (
    <div>
        <h1>Ini adalah Variabel</h1>
        <h2>Harga: {harga}</h2>
    </div>
    
  )
}

export default Variabel