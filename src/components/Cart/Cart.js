import React from 'react';
import cl from './Cart.module.css';
import Modal from "../UI/Modal";

function Cart(props) {
    const cartItems = [
        { id: 'c1', name: 'Rib eye', amount: 3, price: 11.99},
    ].map((item) => <li>{item.name}</li>);

    return (
        <Modal onClose={props.onCloseModal}>
            <ul className={cl['cart-items']}>
                {cartItems}
            </ul>
            <div className={cl.total}>
                <span>Total Amount</span>
                <span>33.22</span>
            </div>
            <div className={cl.actions}>
                <button onClick={props.onCloseModal} className={cl['button--alt']}>Close</button>
                <button className={cl.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;
