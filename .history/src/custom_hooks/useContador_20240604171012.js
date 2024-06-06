import { useState } from "react";

export const useContador = (valorInicial) => {
    const [contador, setContador] = useState(valorInicial);

    //métodos
    
    return [
        contador
    ];
}