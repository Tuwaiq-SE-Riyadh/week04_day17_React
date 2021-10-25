import './App.css';

function Task2() {

    let MenuList={
        name:"pasta",
        price: 60,
        im:"https://everylittlecrumb.com/wp-content/uploads/pinksaucepasta-scaled.jpg",
    }
   
    return (
      <>
      <div>
           <h1>Favorate Food</h1>
          <h3>Name :{MenuList.name}</h3>
          <h3>Price  :{MenuList.price}</h3>
          <img src={MenuList.im} height="300px" width="300px"></img>
      </div>
      </>
  
  
  
    );
  
  }
  
  export default Task2;