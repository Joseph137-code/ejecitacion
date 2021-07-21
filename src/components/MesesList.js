import React from 'react';
import Listado from '../components/Listado';
import meses from "../MockData/meses"

const MesesList = () => {
    return ( 
        <div>
        <h1>Meses del año</h1>
        {meses.map(mes =>(
            <Listado 
                key={"mes" + mes.id}
                {...mes}
            />
        ))}
        </div>
    
        );
}
 
export default MesesList;