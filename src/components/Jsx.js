import React, { useState, Fragment } from 'react'

const JsxAccion  = () => {
    const temperatura = 20

    return (  
        <Fragment>
            <div className="container">
                <h1>soy JSX</h1>
                <p>
                    {
                        temperatura > 20 ?  'Hace calor' : 'Hace frio'
                    }
                </p>
            </div>
        </Fragment>
    );
}

export default JsxAccion;