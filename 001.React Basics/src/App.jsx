// Importing Components from their respective files
// Paths are relative to the current file (./ means same folder)
import Header from './Header';
import Footer from './Footer';
import Food from './Food';

// Main App Component (Functional Component)
function App() {
  return (
     // <> </> is a React Fragment (groups elements without adding extra DOM nodes)
    <>
      {/*Reusable components: */}
      <Header />
      <Food />
      <Food />
      <Footer />
    </>
  );
}

// Export App as the default export (so it can be imported elsewhere)
export default App
