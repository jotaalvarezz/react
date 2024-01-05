import { Fragment, useState } from "react";

const Listas = () => {
    const [numeros, setNumeros] = useState([1,2,3,4,5])
    
    const agregar = () => {
        setNumeros([...numeros, 5])
        /* console.log(numeros) */
    }

    return (
        <Fragment>
            <div className="container">
                <div className="card text-center mb-3" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Numeros</h5>
                        <p className="card-text">
                            {
                                numeros.map((item, index) => 
                                    <h1 key={index}>{item} - {index}</h1>
                                )
                            }
                        </p>
                        <button className="btn btn-success" onClick={agregar}>agregar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Listas