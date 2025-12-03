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

import MyComponent from "./MyComponent";

function App() {
  return (
    <MyComponent />
  );
}

export default App;