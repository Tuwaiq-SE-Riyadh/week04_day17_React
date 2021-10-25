import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MenuList = {
  name: 'Shawarma',
  price: '18',
  img: 'https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card.jpg'
};

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  <div>{MenuList.name}</div>
  <div>{MenuList.price}</div>
  <div>{MenuList.img}</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


