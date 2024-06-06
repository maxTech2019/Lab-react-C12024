import { useState } from "react";

const Formulario = () => {
    const[destino, setDestino] = useState('Timoteo');
    const[mensaje, setMensaje] = useState('Hola');

    const handleChange = (e) => {
        setMensaje(e.target.value);
    }

    return (
        <form>
            <label>
                Para: {'  '}
                <select value={destino}>
                    <option value="Timote">Timoteo</option>
                    <option value="Sarahy">Sarahy</option>
                </select>
            </label>
            <br/><br/>
            <textarea 
                placeholder="Mensaje"
                value={mensaje}
                onChange={handleChange}
            />
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;