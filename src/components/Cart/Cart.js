import React, {useContext, useState} from 'react';
import cl from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartContext = useContext(CartContext);
    const totalAmount = cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount: 1});
    };

    const orderFormHandler = () => {
        setShowOrderForm(true);
    }

    const cartItems = cartContext.items.map((item) =>
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />);

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-food-order-c2cff-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartContext.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartContext.clearCart();
    };

    const cartModalContent = (
        <>
            <ul className={cl['cart-items']}>
                {cartItems}
            </ul>
            <div className={cl.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            {showOrderForm && <Checkout onConfirm={submitOrderHandler} onCancel={() => setShowOrderForm(false)}/>}
            {!showOrderForm &&
                <div className={cl.actions}>
                    <button onClick={props.onCloseModal} className={cl['button--alt']}>Close</button>
                    {hasItems && <button className={cl.button} onClick={orderFormHandler}>Order</button>}
                </div>
            }
        </>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={cl.actions}>
                <button className={cl.button} onClick={props.onCloseModal}>
                    Close
                </button>
            </div>
        </>
    );

    return (
        <Modal onClose={props.onCloseModal}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
}

export default Cart;
