import { Saludo } from "./Saludo";

const AppSaludo = () => {
    const mostrar = []
    const lista = ['Mayra', 'Michell', 'Zaida'];
    lista.forEach((nombre)=> {
        mostrar.push(
            <Saludo nombre = {nombre}/>
        );
    });

    return (
        <>
        </>
    );
}

export default AppSaludo;