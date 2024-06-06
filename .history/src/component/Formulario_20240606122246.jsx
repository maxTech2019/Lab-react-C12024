import { useState } from "react";

const Formulario = () => {
    const[destino, setDestino] = useState('Sarahy');
    const[mensaje, setMensaje] = useState('Hola');

    const handleDestino = (e) => {
        setDestino(e.target.value);
    }

    const handleFormulario = (e) => {
        e.preventDefault();
        setTimeout(()=>{
            alert ();
        }, 2500);
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
                onChange={(e)=>setMensaje(e.target.value)}
            />
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;