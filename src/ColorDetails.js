import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ColorDetails = function(){
    const {name, color} = useParams;
    return(
        <div>
            <div style={{backgroundColor: color}}>
                <h2>{name}</h2>
            </div>
            <Link to='/colors'>Back</Link>
        </div>
    )
}

export default ColorDetails;