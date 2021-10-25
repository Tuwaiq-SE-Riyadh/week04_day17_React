import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Food from './components/Food';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let MenuList = {
  name:"Bargar",
  price:"20$",
  image:"https://recipefairy.com/wp-content/uploads/2020/08/kfc-zinger-burger.jpg"
}

ReactDOM.render(
  <Food name={MenuList.name} price={MenuList.price} image={MenuList.image}  />,
  document.getElementById('foodDiv')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();