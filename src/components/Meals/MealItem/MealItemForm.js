import React, {useRef, useState} from 'react';
import cl from './MealItemForm.module.css';
import Input from "../../UI/Input";

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={cl.form} onSubmit={submitHandler}>
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-10).</p>}
        </form>
    );
}

export default MealItemForm;
