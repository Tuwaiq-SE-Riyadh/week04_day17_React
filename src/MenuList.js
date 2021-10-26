import "./style.css"

function MyMenuList(){
    const obj = [{
        name:"fish fillet",
        price:"30",
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Fried-Fish-Fillet-1.jpg"
    }]
    return(
       <> 
       <div className="eat">
            <p>{obj[0].name}</p>
            <p>{obj[0].price}$</p>
            <img src={obj[0].image} className="imgSize"></img> 
        </div>
    

    </>
    );
}

export default MyMenuList