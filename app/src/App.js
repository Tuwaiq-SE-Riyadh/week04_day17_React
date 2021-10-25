import logo from './logo.svg';
import './App.css';
// import task2 from './task2';

function App() {
  let datetime;
  const currentdate = new Date();
  let h=currentdate.getHours() 
  let m = currentdate.getMinutes();
  let s= currentdate.getSeconds();
  return (
    <>
        <p>
          <button> <a href="https://tuwaiq.edu.sa/">Click here</a></button>
      </p>
      <div>
        <h1>
          Current time is 
        {
           datetime = " "+h+" : "+m+" : "+s+"  "
        }
        </h1>
        <ul>List of activity </ul>
        <li>Reading</li>
        <li>Trining</li>
        <li>Coocking</li>
        
      </div>
    </>



  );

}

export default App;
