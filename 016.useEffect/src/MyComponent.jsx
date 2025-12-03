// useEffect() hook = React hook that tells React DO SOME CODE WHEN (pick one):
//                    This component re-renders
//                    This component mounts
//                    This state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})              Runs after every re-render
// 2. useEffect(() => {}, [])          Runs only on mount
// 3. useEffect(() => {}, [value])     Runs only on mount + when value changes


// USES:
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscription (real-time updates)
// #4 Fetching Data From An API
// #3 Clean up when a component unmounts 

import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue");

    // useEffect(() => { document.title = `Count = ${count}`; }); // updates every time (even with unrelated actions)
    // useEffect(() => { document.title = `My Counter Program`; }, []); // updates only one time
    useEffect(() => { document.title = `Count = ${count} ${color}`; return () => { } }, [count, color]); // updates every time when clicked

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "blue" ? "red" : "blue");
    }

    return (<>

        <p style={{ color: color }}>Count: {count}</p >
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
    </>)

}

export default MyComponent;

