import { useState } from "react";

export const useContador = (valor) => {
    const [contador, setContador] = useState(0);
    return [
        contador
    ];
}