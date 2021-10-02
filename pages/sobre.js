import { useState } from "react";
import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h2>Sobre 2</h2>
            <Contador />
            <Link href="/">
                <a>Sobre</a>
            </Link>
        </div>
    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Contar</button>
        </div>
    );
}

export default Sobre;