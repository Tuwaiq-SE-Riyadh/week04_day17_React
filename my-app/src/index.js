import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const MenuList = {name:"pasta", price:"40SR", image:"https://rainbowplantlife.com/wp-content/uploads/2021/06/sausage-pasta-lazy-meals-1-of-3-500x375.jpg"};

ReactDOM.render(

  <React.StrictMode>
    <App />
    <div className='pasta App'>
      <img className='image' src={MenuList.image}></img>
      <h1>{MenuList.name}</h1>
      <h2>{MenuList.price}</h2>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
