import './MenuList.css';

function MenuList() {

  const foods = [
    {name: 'Supe', price: 100, image: 'https://i.ytimg.com/vi/k_2FZ_rrE_g/maxresdefault.jpg'},
    {name: 'Bergar', price: 50, image: 'https://content3.jdmagicbox.com/comp/gorakhpur/c9/9999px551.x551.120112200656.n1c9/catalogue/sanjay-bergar-gorakhpur-fast-food-py5ni.jpg'},
    {name: 'Rise', price: 80, image: 'https://thumbs.dreamstime.com/b/lemon-rise-south-indian-food-rice-break-fast-copper-bowl-mat-back-ground-107803646.jpg'},
  ];
  
  return (
    
    <div className='menu'>
    {foods.map((post) =>    
          <div className='card'>
          <h3> {post.name} </h3>
          <img src = {post.image}/>
          <p>the Price : {post.price} SR</p> 
          </div> )}
    </div>

  );
}


export default MenuList;
