import { useState } from "react";

export const useContador = (valorInicial) => {
    const [contador, setContador] = useState(0);
    return [
        contador
    ];
}