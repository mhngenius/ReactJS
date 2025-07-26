// props = read-only properties that are shared between components
//         A parent component can send data to a child component
//         <Component key=value />

import Student from "./Student"; // Make sure the file name matches exactly (case-sensitive)

function App() {
  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="SquidWard" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
    </>
  );
}

export default App;