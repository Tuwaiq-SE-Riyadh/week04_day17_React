import React, { version } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Date from "./Date";
import List from "./List";
import MenuList from "./MenuList";
import reportWebVitals from "./reportWebVitals";
import shaw from "./shawrma.png"
import falafl from "./falafl.png"

const act1 = "gaming";
const act2 = "movies";
const act3 = "hanging out";
const act4 = "coding";

const food = [
  {
    name: "Shawrma",
    price: 10,
    img: shaw,
  },
  {
    name: "Falafel",
    price: 5,
    img: falafl,
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Date />
    <List act1={act1} />
    <List act1={act2} />
    <List act1={act3} />
    <List act1={act4} />
    <h1>The Menu</h1>
    <MenuList food={food[0]} />
    <MenuList food={food[1]} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
