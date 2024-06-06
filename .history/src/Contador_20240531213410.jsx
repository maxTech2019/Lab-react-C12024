
const Contador = () => {
    const [contador, setContador] = useState(0)
    return (
        <button>
            {contador}
        </button>
    );
}