import React, { useState } from 'react'

export const NuevoRestaurante = () => {

    const [valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = '', descripcion = '', direccion = '', imagen = '' } = valoresFormulario;
    const handleOnChange = (e) => {
        setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(valoresFormulario);
    }

    return (
        <div className="container-fluid mt-3">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input required type="text" name="nombre" value={nombre}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input required type="text" name="direccion" value={direccion}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input required type="text" name="descripcion" value={descripcion}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input required type="url" Name="imagen" value={imagen}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
