import React from 'react';
import './Button.css';
const Button = (props) => {
    return (
        <div className='Button'>
            <button 
            onClick={props.click}>Click Me</button>
        </div>
    )
}

export default Button;