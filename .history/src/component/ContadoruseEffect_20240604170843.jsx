
import React from 'react';
import '../css/estilos_contuseEffect.css';
import { useContador } from '../custom_hooks/useContador';


export const ContadoruseEffect = () => {
    useContador()
  return (
    <>
        <h1>Contador</h1>
        <button className='miBoton'> + </button>
        <button className='miBoton'> - </button>
    </>
  )
}