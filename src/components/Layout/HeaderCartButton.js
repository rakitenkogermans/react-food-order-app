import React, {useContext} from 'react';
import CartIcon from "../Cart/CartIcon";
import cl from './HeaderCartButton.module.css';
import CartContext from "../../context/cart-context";

function HeaderCartButton(props) {
    const cartContext = useContext(CartContext);

    const cartItemsNumber = cartContext.items.reduce((num, item) => {
        return num + item.amount;
    }, 0);
    return (
        <>
            <button onClick={props.onShowModal} className={cl.button}>
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
