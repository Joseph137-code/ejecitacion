import React from 'react';
import Listado from '../components/Listado';
import dias from "../MockData/dias"

const DiasList = () => {
    return ( 
        <div>
            <h1>Días de la Semana</h1>
            {dias.map(dia =>(
                <Listado 
                    key={"dia" + dia.id}
                    {...dia}
                />
            ))}
        </div>
        
     );
}
 
export default DiasList;