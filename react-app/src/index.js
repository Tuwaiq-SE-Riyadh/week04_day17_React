import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
   { child()}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
function child(){
  const MenuList=[
    {id:1 , namefood:"salad",pic:"https://cutt.ly/HRIQrvf ",price:30},
    {id:1 , namefood:"chichen" ,pic:"https://cutt.ly/8RIfhGD ",price:40}  
  ]

  const theItem=MenuList.map((item,key)=>{
    return(
   <div className="menue">
     <p>{item.namefood}</p>
     <p>{item.price}</p>
     <img src={item.pic}/>
    

   </div>
    )
  }
  
  )
return (theItem)
}
console.log(child())
