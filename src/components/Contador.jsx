import { useState } from "react";

const Contador = () => {
//aqui defino mis state
const [numero, setNumero] = useState(0)
// el state numero solo se modifica con la funcion setNumero
    return (
        <section className="text-center">
            <h3>Contador</h3>
            <h3>{numero}</h3>
            <button className="btn btn-primary">+1</button>
        </section>
    );
};

export default Contador;