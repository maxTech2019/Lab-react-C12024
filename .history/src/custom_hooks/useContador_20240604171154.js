import { useState } from "react";

export const useContador = (valorInicial) => {

    const [contador, setContador] = useState(valorInicial);
    //métodos
    const incremento = () => {
        setContador(contador + )
    }

    const decremento = () => {

    }

    return [
        contador
    ];
}