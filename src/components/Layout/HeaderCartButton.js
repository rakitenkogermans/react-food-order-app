import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "../Cart/CartIcon";
import cl from './HeaderCartButton.module.css';
import CartContext from "../../context/cart-context";

function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext);

    const cartItemsNumber = cartContext.items.reduce((num, item) => {
        return num + item.amount;
    }, 0);

    const btnClasses = `${cl.button} ${btnIsHighlighted ? cl.bump : ''}`;

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timerForClass = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timerForClass);
        }
    }, [cartContext.items]);

    return (
        <>
            <button onClick={props.onShowModal} className={btnClasses}>
                <span className={cl.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={cl.badge}>{cartItemsNumber}</span>
            </button>
        </>
    );
}

export default HeaderCartButton;
