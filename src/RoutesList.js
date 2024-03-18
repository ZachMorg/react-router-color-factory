import {Routes, Route, Navigate} from 'react-router-dom';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';
import ColorLinks from './ColorLinks';

const RoutesList = function(){
    return(
        <Routes>
            <Route
                path='/colors/:name/:color'
                element={<ColorDetails/>}
            />
            <Route
                path='/colors/new'
                element={<NewColorForm/>} 
            />
            <Route
                path='/colors'
                element={<ColorLinks/>}
            />
            <Route
                path='/*'
                element={<Navigate to='/colors'/>}
            />
        </Routes>
    )
}

export default RoutesList;