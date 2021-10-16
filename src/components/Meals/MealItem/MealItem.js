import React, {useContext} from 'react';
import cl from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

function MealItem(props) {
    const cartContext = useContext(CartContext);

    const price = `$${props.mealPrice.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.mealName,
            amount: amount,
            price: props.mealPrice
        });
    };

    return (
        <li className={cl.meal}>
            <div>
                <h3>{props.mealName}</h3>
                <div className={cl.description}>{props.mealDesc}</div>
                <div className={cl.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;
