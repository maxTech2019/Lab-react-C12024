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
            <ul>
                {
                    productos.map(({producto)=>(
                        <li key={}>{producto.title}</li>
                    ))
                }
            </ul>
        </div>
    );
} 