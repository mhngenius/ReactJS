// React hook = special function that allowsfunctionaal components
//              to use React features  without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback and more ...)

// useState = A Reacct hook that allows the creation of stateful variable
//           AND a setter function to update it's value in the virtual DOM.
//          [name, setName]

import Counter from "./counter";

function App() {
  return (
    <Counter />
  );
}

export default App;

