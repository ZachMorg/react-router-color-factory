import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';


const ColorLinks = function(){
    const location = useLocation();
    const colorObj = location.state;
    const [colors, setColors] = useState([]);

    if(colorObj){
        setColors(colors => [...colors, colorObj]);
    }    
    
    const colorElements = colors.map(color => (
        <li><Link to={`/colors/${color.name}/${color.color}`}>{color.name}</Link></li>
    ))

    return(
        <div>
            <Link to='/colors/new'>Add a new color</Link>
            <ul>
                {colorElements}
            </ul> 
        </div>
        
    )
}

export default ColorLinks;