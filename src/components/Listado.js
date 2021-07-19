import React from 'react';

const onViewDetails = () =>{
    console.log("Probando")
}

const Listado = ({mes}) => {
    console.log(mes)
  
    return (
        <div className="container">
            <div className="row mx-3">
                <div className="col-md-4 themed-grid-col">
                    <div>ID: {mes.id}</div>
                </div>
                <div className="col-md-4 themed-grid-col">
                <div>Descripción: {mes.nombre}</div></div>
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