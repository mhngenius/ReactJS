// updater functions = A function passed as an argument to setState() usually 
//                     ex. setYear(year + 1) (arrow function) => (y => y + 1)
//                     Allow for safe updates based on the previous state 
//                     Used with multiple state updates and asynchronous functions 
//                     Good practice to use updater functions

import React, { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {

        // uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // Next state becomes the CURRENT state after an update.

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1); // adds 3 numbers every time 

        // takes the PENDING state to calculate NEXT state.
        // React puts your updater function in queue (waiting in line).
        // during the next render, it will call them in the same order.
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1); // decreases 3 numbers every time 
    }

    function reset() {
        setCount(c => c = 0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponent;
