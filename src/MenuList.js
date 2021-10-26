import React from "react";
function Menu (food){
    console.log(food.food.img);
    return (
        <div className="App">
            <div className="App-header">
            
                <h3>name:{food.food.name}</h3>
                <h3>price:{food.food.price}</h3>
                <img src={food.food.img}className="img"></img>
             </div>
                
        </div>
      );
}
export default Menu;