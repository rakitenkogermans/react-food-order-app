import React from 'react';
import cl from './MealItemForm.module.css';
import Input from "../../UI/Input";

function MealItemForm(props) {
    return (
        <form className={cl.form}>
            <Input
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
        </form>
    );
}

export default MealItemForm;
