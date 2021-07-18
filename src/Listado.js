import React from 'react';

const onViewDetails = () =>{
    console.log("Probando")
}

const Listado = () => {
    return (
        <div className="container">
            <h1>Título</h1>
            <div className="row mx-3">
                <div className="col-md-4 themed-grid-col">ID</div>
                <div className="col-md-4 themed-grid-col">Descripción</div>
                <div className="col-md-4 themed-grid-col">Ver más
                    <div>
                        <button 
                            type="button" 
                            className="btn btn-outline-info mt-3"
                            onClick={()=> onViewDetails()}
                            
                            >Info</button>
                    </div>
                </div>
             </div>
        </div>
     );
}
 
export default Listado;