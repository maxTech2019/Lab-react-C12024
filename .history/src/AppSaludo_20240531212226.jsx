import { Saludo } from "./Saludo";

const AppSaludo = () => {
    const mostrar =[]
    const lista = ['Mayra', 'Michell', 'Zaida'];
    return (
        <>
            {/* <Saludo nombre = {lista[0]} />
            <Saludo nombre = {lista[1]} />
            <Saludo nombre = {lista[2]} /> */}

            {
                lista.forEach((nombre)=>{
                    <Saludo nombre = {nombre}/>
                    console.log(nombre);
                })
            }
        </>
    );
}

export default AppSaludo;