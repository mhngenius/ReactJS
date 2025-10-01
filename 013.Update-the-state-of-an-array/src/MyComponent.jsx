// update ARRAYS in state

import React, { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(["Pizza", "Pasta", "Sushi"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value.trim();
        if (newFood === "");
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List Of Food:</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;
