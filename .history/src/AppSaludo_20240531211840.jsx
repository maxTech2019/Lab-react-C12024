import { Saludo } from "./Saludo";

const AppSaludo = () =>{
    const lista = ['Mayra', 'Michell', 'Zaida'];
    return (
        <>
            {/* <Saludo nombre = {lista[0]} />
            <Saludo nombre = {lista[1]} />
            <Saludo nombre = {lista[2]} /> */}
            {
                lista
            }
        </>
    );
}

export default AppSaludo;