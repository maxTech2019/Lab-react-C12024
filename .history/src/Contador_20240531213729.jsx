
const Contador = () => {
    const [contador, setContador] = useState(0);
    
    const incrementar = () => {
        setContador(contador +  1);
    }

    const decrementar = () => {
        if (contador === 0)
            setContador(0)
        else
            setContador(contador - 1);
    }

    return (
        <div>
            <h1></h1>
        </div>
        <button onClick={nc}>
            Incrementar
        </button>
    );
}