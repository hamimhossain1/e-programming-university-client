import React from 'react';
import { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {

    const [toggleButton, setToggleButton] = useState(false);
    const handleClick= () =>{
        setToggleButton(!toggleButton);
    }


    return (
        <div className='toggle-main'>
            <div onClick={handleClick} className='toggle'>
                {toggleButton ? <div className="toggle_left"></div> : 
                <div className="toggle_right"></div>}
            </div>
        </div>
    );
};

export default ToggleButton;