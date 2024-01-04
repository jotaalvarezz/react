import React, { useState, Fragment } from 'react'

const Contador = () => {
    const [numero, setNumero] = useState(10);

    const sumar = () => {
        setNumero(numero+10)
    }

    return (  
        <Fragment>
            <h1>EL CUCHO ME LA PELA! {numero}</h1>
            <button onClick={sumar}>contar</button>
        </Fragment>
    );
}
 
export default Contador;