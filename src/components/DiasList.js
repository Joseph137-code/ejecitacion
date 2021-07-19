import React from 'react';
import Listado from '../components/Listado';
import meses from "../MockData/meses"

const DiasList = () => {
    console.log(meses)
    return ( 
        <div>
                    <h1>Meses del año</h1>
            {meses.map(mes =>(
                <Listado 
                    mes={mes}
                />
            ))}
        </div>
        
     );
}
 
export default DiasList;