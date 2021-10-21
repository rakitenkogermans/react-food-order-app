import React, {useEffect, useState} from 'react';
import cl from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch('https://react-food-order-c2cff-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong.');
            }

            const respData = await response.json();

            const loadedMeals = [];

            for (const key in respData) {
                loadedMeals.push({
                    id: key,
                    name: respData[key].name,
                    description: respData[key].description,
                    price: +respData[key].price,
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals().catch(e => {
            setIsLoading(false);
            setError(e.message);
        });
    }, []);

    const mealsList = meals.map((meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            mealName={meal.name}
            mealDesc={meal.description}
            mealPrice={meal.price}
        />
    );

    return (
        <section className={cl.meals}>
            <Card>
                {isLoading && !error && <p style={{textAlign: 'center'}}>Loading...</p>}
                {!isLoading && error && <p style={{textAlign: 'center'}}>{error}</p>}
                {!isLoading && !error && <ul>{mealsList}</ul>}
            </Card>
        </section>
    );
}

export default AvailableMeals;
