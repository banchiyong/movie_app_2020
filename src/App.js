import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [

  {    
    id : 1,
    name : "Kimchi",
    image : "http://minamkimchi.com/web/product/big/201606/18_shop1_290903.jpg",
    rating : 3.5
  },

  {    
    id : 2,
    name : "Donkachu",
    image : "http://image.auction.co.kr/itemimage/10/dd/61/10dd6169a6.jpg",
    rating : 4.8
  }

];

function Food({name,image,rating}) {  
  return (
  <div>
    <h1> I like {name}</h1>
    <h4> {rating}/5.0 </h4>
    <img src={image} alt={name}/>
  </div>);
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
function App() {
  return (
    <div className="App">
      
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} /> 
      ))}
      
    </div>
  );
}

export default App;
