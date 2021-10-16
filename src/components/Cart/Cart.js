import React, {useContext} from 'react';
import cl from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
    const cartContext = useContext(CartContext);
    const totalAmount = cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount: 1});
    };

    const cartItems = cartContext.items.map((item) =>
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />);

    return (
        <Modal onClose={props.onCloseModal}>
            <ul className={cl['cart-items']}>
                {cartItems}
            </ul>
            <div className={cl.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={cl.actions}>
                <button onClick={props.onCloseModal} className={cl['button--alt']}>Close</button>
                {hasItems && <button className={cl.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;
