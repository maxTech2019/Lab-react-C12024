import { useEffect, useState } from "react";
import '../css/productos.css';

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
                <tr></tr>
                {
                    productos.map(({id, title, price, image}) => (
                        <tr key={id}>
                            <td>{title}</td>
                            <td>{price}</td>
                            <td>
                                <img src={image} alt={`Imagen ${id}`} />
                            </td>
                        </tr>
                    ))
                }
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