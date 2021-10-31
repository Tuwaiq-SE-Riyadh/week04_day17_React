
import './App.css';
import { directive } from '@babel/types';


function App() {
  const activities = ["drow","code","sleep"];
  const listActivities = activities.map((ele,index) =><li key={index}>{ele}</li>);
  return(  
    <div>
      <button onClick={function(){document.location='https://tuwaiq.edu.sa/'}}>tuwaiq</button>
      <h5>It is {new Date().toDateString()} {new Date().toLocaleTimeString()}.</h5>
    {listActivities} 
    </div>
  
  );
 
}

export default App;

