
const Contador = () => {
    const [contador, setContador] = useState(0);
    
    const incrementar = () => {
        setContador(contador +1);
    }

    const incrementar = () => {
        setContador(contador +1);
    }

    return (
        <button>
            {contador}
        </button>
    );
}