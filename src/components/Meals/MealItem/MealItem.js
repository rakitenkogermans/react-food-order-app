import React from 'react';
import cl from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

function MealItem(props) {
    const price = `$${props.mealPrice.toFixed(2)}`;

    return (
        <li className={cl.meal}>
            <div>
                <h3>{props.mealName}</h3>
                <div className={cl.description}>{props.mealDesc}</div>
                <div className={cl.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    );
}

export default MealItem;
