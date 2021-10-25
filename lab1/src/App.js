import logo from './logo.svg';
import './App.css';

function App() {
  const open1 = () => {
    {window.open('https://www.hyperiondev.com/')}
  }
  return (
    <div className="App">
     <button onClick={open1}>
   Open hyperiondev site
     </button>
     <div>
       <h1>Today is:  {new Date().toLocaleDateString()}</h1>
       <h1>Time is: {new Date().toLocaleTimeString()}</h1>
     </div>
     <ul>
       <li>MongoDB - document database</li>
       <li>Express(.js) - Node.js web framework</li>
<li>React(.js) - a client-side JavaScript framework</li>
<li>Node(.js) - the premier JavaScript web server</li>
     </ul>
    </div>
  );
}

export default App;
