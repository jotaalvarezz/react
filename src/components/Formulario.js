import { useState, Fragment } from "react";

const Formulario = () => {
    const [datos, setDatos] = useState({
        name: '',
        lastName: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(datos.name+' - '+datos.lastName)
    }

    return (
        <Fragment>
            <div className="card text-center mb-3" style={{with: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Formulario</h5>
                    <form className="row" onSubmit={sendData}>
                        <div className="row">
                            <div className="col-md-12">
                                <input className="form-control" 
                                        placeholder="Ingrese Nombre" 
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <input className="form-control" 
                                        placeholder="Ingrese Apellido" 
                                        type="text"
                                        name="lastName"
                                        onChange={handleInputChange}
                                        />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-md-3">
                                <button className="btn btn-success" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Formulario;