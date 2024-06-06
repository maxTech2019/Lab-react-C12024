import { Saludo } from "./Saludo";

const AppSaludo = () => {
    const mostrar = []
    const lista = ['Mayra', 'Michell', 'Zaida'];
    lista.forEach((nombre,pos)=> {
        mostrar.push(
            <Saludo
                key = {pos} 
                nombre = {nombre}
            />
        );
    });

    return (
        <>
            {mostrar}
        </>
    );
}

export default AppSaludo;