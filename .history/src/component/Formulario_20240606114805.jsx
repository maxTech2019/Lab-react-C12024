
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
            <br/><br/>
            <textarea placeholder="Mensaje"/>
            <br/><br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;