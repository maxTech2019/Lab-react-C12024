import { Saludo } from "./Saludo";

const AppSaludo = () => {
    const mostrar = []
    const lista = ['Mayra', 'Michell', 'Zaida'];
    lista.forEach((nombre)=> {
        mostrar.push(
            <Saludo nombre = {nombre}/>
        );
        
    }
    return (
        <>
            {/* <Saludo nombre = {lista[0]} />
            <Saludo nombre = {lista[1]} />
            <Saludo nombre = {lista[2]} /> */}

        </>
    );
}

export default AppSaludo;