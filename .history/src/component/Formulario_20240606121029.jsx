import { useState } from "react";

const Formulario = () => {
    const[destino, setDestino] = useState('Timoteo');
    const[mensaje, setMensaje] = useState('Hola');

    const handleTexto = (e) => {
        setMensaje(e.target.value);
    }

    const handleDestino = (e) => {
        setDestino(e.target.value);
    }

    const handleFormulario = (e) => {

    }

    return (
        <form onSubmit={handleFormulario}>
            <label>
                Para: {'  '}
                <select value={destino} onChange={handleDestino}>
                    <option value="Timote">Timoteo</option>
                    <option value="Sarahy">Sarahy</option>
                </select>
            </label>
            <br/><br/>
            <textarea 
                placeholder="Mensaje"
                value={mensaje}
                onChange={handleTexto}
            />
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;