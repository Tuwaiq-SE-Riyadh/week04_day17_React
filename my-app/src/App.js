import './App.css';
function MyFun(){
  document.location='https://tuwaiq.edu.sa/'
}
function myList(){
 let  Array=[1,2,3,4,5]
 const arr=Array.map((element, index)=>{
return   <li key={index}> {element} </li>
 });
 return arr
}


function App() {
  return (
    <div >
        <button onClick={MyFun} >click</button>
       
        <h2>It is {new Date().toDateString() } { new Date().toLocaleTimeString()}.</h2>

      
        <ul>{myList()}</ul>
    </div>



  );
  

}

export default App;
