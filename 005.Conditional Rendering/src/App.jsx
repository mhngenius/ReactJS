// conditional rendering = allows you to control what gets rendered 
//                         in your application based on certain conditions 
//                         (show , hide or change componenets)

import UserGreeting from "./userGreeting.jsx";

function App() {
  return (
    <UserGreeting isLoggedIn={true /*false*/} username="Genius" />
  );
}

export default App;