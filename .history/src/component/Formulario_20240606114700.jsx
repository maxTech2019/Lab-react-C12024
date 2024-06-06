
const Formulario = () => {
    return (
        <form>
            <label>
                Para: {'  '}
                <select name="" id="">
                    <option value="Timote">Timoteo</option>
                    <option value="Sarahy">Sarahy</option>
                </select>
            </label>
            <br/>
            <textarea placeholder="Mensaje"/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;