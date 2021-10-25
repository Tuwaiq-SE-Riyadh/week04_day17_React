import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <a href="https://tuwaiq.edu.sa/"><button type="button">Click Me!</button></a>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>

    <div className="App-header">
      <ul>
          <li>Sleeping</li>
          <li>Reading</li>
          <li>Drawing</li>
      </ul>
      </div>
    </div>
  );
}

export default App;
