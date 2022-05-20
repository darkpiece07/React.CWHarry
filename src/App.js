import './App.css';
import Navbar from './components.js/Navbar';
import TextForm from './components.js/TextForm';

function App() {
  return (
    <>
      <Navbar title="myTextApp" about="About"/>
      <div className="container">
          <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
