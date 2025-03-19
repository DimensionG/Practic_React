import React from 'react'
import "./FirstComponent.css"

const cadena = "esto es una cadea"
const numero = 123
const arreglo = ['uno ', 2 , ' tres ']
const objeto = {propiedad1: 'cadena', propiedad2: 100}
export const FirstComponent = ({valor1, valor2}) => {
    console.log(valor1, valor2)
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>{cadena}</p>
      <p>{numero}</p>
      <p>{arreglo}</p>
      <p>{objeto.propiedad1}</p>
      <p>{objeto.propiedad2}</p>
      <p>{valor1}</p>
      <p>{valor2}</p>
    </div>
  )
}

//export default FirstComponent
