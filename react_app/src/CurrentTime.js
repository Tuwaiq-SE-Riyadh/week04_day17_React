import React from 'react';
import ReactDOM from 'react-dom';

function currentTime() {
    const element = (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('h2'));
  }
  
  setInterval(currentTime, 1000);
  
  export default currentTime;