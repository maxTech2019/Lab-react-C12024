import { Saludo } from "./Saludo";

const AppSaludo = () =>{
    const lista = ['Mayra', 'Michell', 'Zaida'];
    return (
        <Saludo nombre = {lista[0]} />
    );
}

export default AppSaludo;