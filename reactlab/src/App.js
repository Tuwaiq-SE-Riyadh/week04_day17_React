import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //task1
    <>
    <div>
      <button
        type="button"
        onClick={(e) => {
        window.location.href='https://tuwaiq.edu.sa/';
      }}> Click here</button>
    </div> 
    <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    <div>
      <h2>
      list of activities:
      </h2>
      <ul>
        <li>Reading</li>
        <li>Workout</li>
        <li>Drowing</li>
      </ul>
    </div>
    </>
  );
}

export default App;
