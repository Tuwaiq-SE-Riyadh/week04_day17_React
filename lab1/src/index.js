import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import sarahPic from './sara.jpg';
//Create a JavaScript object called ‘user’ that stores all the details
// name, surname, date_of_birth, country, email, telephone, company, profile_picture, interests. 
//The interests property should be used to store an array of the user’s interests.
let user={
  name:"Sarah",
  surname:'Mira'
  ,date_of_birth:'29/1',
  country:"Saudi Arabia",
  email:"sarah@gmail.com",
  telephone:"0550000000",
  company:'Tuwaiq Academy',
  profile_picture:<img src={sarahPic} />,
  interests:['Reading','cooking']
}
const element=(
  
  <div className='userInfo'>
     <div className='img1'>{user.profile_picture}</div> 
    <h4>Name: {user.name}</h4>
    <h4>surname: {user.surname}</h4>
    <h4>date_of_birth: {user.date_of_birth}</h4>
    <h4>country:  {user.country}</h4>
    <h4>email: {user.email}</h4>
    <h4>telephone: {user.telephone}</h4>
    <h4>company: {user.company}</h4>
  <h4>
    {user.interests.forEach(element=>{
     console.log(element);
     return  element
    })}</h4>
    {/* <h4>
{user.interests.map((element,index)=>{
  return <"filename"+ interest=(element) key=(index)/>
})}
</h4> */}
   
  </div>
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
