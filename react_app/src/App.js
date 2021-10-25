import React from 'react';
import './App.css';
import CurrentTime from "./CurrentTime"
import ButtonLink from "./ButtonLink.js"
function App() {
  let activities = ["playing football","watch movies","playing online games"]
  return (
    <div className="App">
      
      <ButtonLink>{ButtonLink}</ButtonLink>
      <h2 id="h2"></h2>
      <p>activities:{activities.map(function(ele,ind){
        return " "+ele + ", "
      })}</p>
    </div>
  );
  
  
}

export default App;

