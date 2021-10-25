import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MenuList = {

  name: "name: burger",
  price: "price: $10",
  image: "https://seabitesseafood.com.au/wp-content/uploads/2020/04/angus-burger.jpg"
};

ReactDOM.render(
  <React.StrictMode>
    <App food={MenuList}/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
