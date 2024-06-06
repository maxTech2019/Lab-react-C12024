
import React from 'react';
import '../css/estilos_contuseEffect.css';
import { useContador } from '../custom_hooks/useContador';


export const ContadoruseEffect = () => {
    const [contador, incremento, decremento] = useContador(0);
  return (
    <>
        <h1>{contador}</h1>
        <button className='miBoton' onClick={}>
             + 
        </button>
        <button className='miBoton'>
             - 
        </button>
    </>
  )
}