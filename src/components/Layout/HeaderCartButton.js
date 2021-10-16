import React from 'react';
import CartIcon from "../Cart/CartIcon";
import cl from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
    return (
        <>
            <button onClick={props.onShowModal} className={cl.button}>
                <span className={cl.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={cl.badge}>7</span>
            </button>
        </>
    );
}

export default HeaderCartButton;
