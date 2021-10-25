import './App.css';


function App(p) {
  const activities  = ["football", 'swimming'];
console.log(p.p[0].img);
  return (
    
<>
<div>
<h1>Task1</h1>
      <a href="https://tuwaiq.edu.sa/"><button>Tuwaiq</button></a>
      <p>Time :{new Date().toLocaleTimeString()}</p>
      <p>Date :{new Date().toLocaleDateString()}</p>
      <div><p>Activities: 1-{activities[0]}  2-{activities[1]}</p></div>
      <br/>
      <h1>Task2</h1>
      <img src= {p.p[0].img}  width="150px" height="150px" style={{border: "5px solid black"}}/>
      <p>Name : {p.p[0].name}</p>
      <p>price : {p.p[0].price}</p>
      <br/>
      <img src={p.p[1].img} width="150px" height="150px" style={{border: "5px solid black"}}/>
      <p>Name : {p.p[1].name}</p>
      <p>price : {p.p[1].price}</p>
      
    </div>
</>
  );
}






export default App;