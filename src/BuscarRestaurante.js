import React, { useState } from 'react';
import { listaRestaurantes } from './data-restaurantes';


const BuscarRestaurante = () => {
    const [valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = '' } = valoresFormulario;
    const handleOnChange = (e) => {
        setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const NuevoRestaurante = listaRestaurantes
            .filter(listaRestaurantes => listaRestaurantes.nombre.toUpperCase().includes(nombre.toUpperCase()));
        console.log(NuevoRestaurante);      
    }


    return (
        <div className="container-fluid mt-3">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Escribe un texto</label>
                    <input required type="text" name="nombre" value={nombre}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
        </div>
    )

}

export {
    BuscarRestaurante
}

