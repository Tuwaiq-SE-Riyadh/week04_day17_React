import './App.css';
import React from 'react'; 
import Gettime from "./Time"
import Myhoopies from "./Myhoobbies"

function App() {
  return (
    <>
    
    <button onClick={function goTo(){
        window.open("https://tuwaiq.edu.sa/");
    }}>
      Tuwaiq Web
    </button>
    <Gettime />
    <Myhoopies/>
    </>
  );
}

export default App;
