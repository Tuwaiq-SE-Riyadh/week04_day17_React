import './food.css';


function Food(props) {
    return (
        <>
        <div class="foodClass">
            <h1>Name: {props.name}</h1>
            <img src={props.image}/>
            <p class="priceClass">Price: {props.price}</p>
        </div>
        </>
    );
    }


export default Food;
