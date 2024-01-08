import React from 'react';
import { useContext } from 'react';
import {CartContext} from '../Context/ContextApi'



const Cards = ({product}) => {

  const {addCarts, cartItems} = useContext(CartContext);

  const handleAddToCart = (product, id) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      addCarts(product);
    } else {
      alert('Product is already in the cart');
    }
  };
    
  return (
    <div class="col mt-5" key={product.id}>
    <div class="card h-100 d-flex align-items-center card-ground">
      <img src={product.image} class="card-img-top h-auto" alt="..."/>
      <div class="card-body h-50 ">
        <h5 class="card-title font-style ">{product.brand}</h5>
        <p className='card-text fw-semibold font-style'>Model : {product.model}</p>
        
        <p className='card-text fw-semibold font-style'>Released on : {product.release_year}</p>
        <p className='card-text font-style'>Price : ${(product.price)}</p>
      </div>
      <button className="btn font-style" onClick={() => handleAddToCart(product, product.id)}>
          Add to cart
       </button>
    </div>
   </div>
  )
}

export default Cards