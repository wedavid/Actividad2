import React, { useState } from 'react'
import { listaRestaurantes } from './data-restaurantes';

export const Inicio = () => {
    const [restaurantes, setRestaurantes] = useState(listaRestaurantes);
    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    restaurantes.map(restaurante => {
                        return (
                            <div className="col" key={restaurante.id}>
                                <div className="card">
                                    <img src={restaurante.imagen} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{restaurante.nombre}</h5>
                                        <p className="card-text">{restaurante.direccion}</p>
                                        <p className="card-text">{restaurante.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
