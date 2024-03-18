import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const NewColorForm = function(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        color: ''
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const submitColor = evt => {
        evt.preventDefault();
        let colorData = formData;
        setFormData({name: '', color: ''});
        navigate('/colors', {state:{
                                colorData: colorData
                            }});
    };

    return(
        <form onSubmit={submitColor}>
            <label htmlFor='name'>Color Name:</label>
            <input
                onChange={handleChange}
                name='name'
                value={formData.name}
                id='name'
            />
            <label htmlFor='color'>Color:</label>
            <input 
                onChange={handleChange}
                name='color'
                type='color'
                value={formData.color}
                id='color'
            />
            <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;