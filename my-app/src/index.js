import a from './1.jpg';
import b from './2.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App';
import reportWebVitals from './reportWebVitals';
const MenuList = [
  {name:"Pizza",
   price: "20$",
   img: a},

   {name:"Soup",
   price: "10$",
   img: b}
]



ReactDOM.render(
  <React.StrictMode>
    <App p = {MenuList}/>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
