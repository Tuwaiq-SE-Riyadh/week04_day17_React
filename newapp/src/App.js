// import logo from './logo.svg';
import './App.css';
import NewBut from './NewBut.js'

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       <NewBut/>

       
      <div className="contains">
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>

      <div className="contains">
        <ul>
          <li>Watch movies</li>
          <li>video games</li>
          <li>Sports</li>
        </ul>
      </div>
      
       
       <div className="food">
       <h2> {props.food.name} </h2>
       <h3>{props.food.price}</h3>
       <img  className="image" src={props.food.image}></img>
       </div>

        
      </header>
    </div>

  );
}

export default App;
