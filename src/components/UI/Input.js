import React from 'react';
import cl from './Input.module.css';

function Input(props) {
    return (
        <div className={cl.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
}

export default Input;
