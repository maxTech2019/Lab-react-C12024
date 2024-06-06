import { useState } from "react";

const Formulario = () => {
    const[destino, setDestino] = useState('Hola');
    const[mensaje, setMensaje] = useState('Hola');
    return (
        <form>
            <label>
                Para: {'  '}
                <select name="" id="">
                    <option value="Timote">Timoteo</option>
                    <option value="Sarahy">Sarahy</option>
                </select>
            </label>
            <br/><br/>
            <textarea 
                placeholder="Mensaje"
                value={destino}
                onChange={(e)=>}
            />
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;