import React from 'react';

const onViewDetails = ({id,nombre}) =>{

    console.log( nombre)
}

const Listado = ({id, nombre, title}) => {
  
    return (
        <div className="container">
            <h1>{title}</h1>
            <div className="row mx-3">
                <div className="col-md-4 themed-grid-col">
                    <div>ID: {id}</div>
                </div>
                <div className="col-md-4 themed-grid-col">
                <div>Descripción: {nombre}</div></div>
                <div className="col-md-4 themed-grid-col">Ver más
                    <div>
                        <button 
                            type="button" 
                            className="btn btn-outline-info mt-3"
                            onClick={()=> onViewDetails({id, nombre})}
                            
                            >Info</button>
                    </div>
                </div>
             </div>
        </div>
     );
}
 
export default Listado;