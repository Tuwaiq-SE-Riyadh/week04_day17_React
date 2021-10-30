import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

 function App() {
  var today = new Date()
   let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let list=
      {frist:"swimming",second:"reading",third:"writing "}
  return (
        
 <>
        
      <a href="https://tuwaiq.edu.sa/"><button > click</button></a>  
        <div id= "date">{date}{time}</div>
        <div>
          <ul>
            <li>{list.frist}</li>
            <li>{list.second}</li>
            <li>{list.third}</li>
          </ul>
          </div>

         
        </>
      
    
  );
}


export default App;
