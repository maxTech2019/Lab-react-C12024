
import React, { useEffect } from 'react';
import '../css/estilos_contuseEffect.css';
import { useContador } from '../custom_hooks/useContador';


export const ContadoruseEffect = () => {
    const [contador, incremento, decremento] = useContador(0);

    useEffect(()=>{
        document.title = `Hiciste click.  ${contador} veces`;
    });

  return (
    <>
        <h1>{contador}</h1>
        <button className='miBoton' onClick={incremento}>
             + 
        </button>
        <button className='miBoton' onClick={decremento}>
             - 
        </button>
        sp
    </>
  )
}