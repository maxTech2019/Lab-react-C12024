import { useState } from "react";

export const useContador = (valorInicial) => {

    const [contador, setContador] = useState(valorInicial);
    //métodos
    const incremento = () => {
        setContador(contador + 1);
    }

    const decremento = () => {
        if(contador)

    }

    return [
        contador
    ];
}