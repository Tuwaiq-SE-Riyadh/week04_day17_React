import React from 'react';
import './App.css';

function App() {
  let MenuList = {name:"Pasta",price:50,image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F09%2F17%2Fcream-tomato-rigatoni-FT-RECIPE1020.jpg"}
  return (
    <div className="App">
      <h1>name: {MenuList.name}</h1>
      <p>Price: {MenuList.price}</p>
      <img src={MenuList.image}/>
    </div>
  );
  
  
}

export default App;

