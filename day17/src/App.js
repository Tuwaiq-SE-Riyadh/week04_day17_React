import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <a href="https://tuwaiq.edu.sa/" ><button>Click to view Tuwaiq Website</button></a>
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>

        <p>List Of Activities</p>
        <ul>
          <li>Video Games</li>
          <li>Coding</li>
          <li>Football</li>
        </ul>
    </>
  );
}


export default App;
