import { useEffect, useState } from "react";

export const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductos(data));
    },[]);

    return(
        <div>
            <table>
                tr
            </table>
            {/* <ul>
                {
                    productos.map(({id, title})=>(
                        <li key={id}>{title}</li>
                    ))
                }
            </ul> */}
        </div>
    );
} 