import { useState } from "react";

const Formulario = () => {
    const[destino, setDestino] = useState('');
    const[mensaje, setMensaje] = useState('Hola');

    const handleChange = () => {

    }

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
                value={mensaje}
                onChange={ha}
            />
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;