import React from 'react';
import cl from './Card.module.css';

function Card(props) {
    return (
        <div className={cl.card}>
            {props.children}
        </div>
    );
}

export default Card;
