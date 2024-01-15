import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../Redux/Reducers/Cart';
import { FaCartArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Cards = ({product}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  const handleAddToCart = (product, id) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id) 
    if(!isProductInCart){
      dispatch(addToCart(product, id));
    }else{
      alert(`Product: ${product.model} is already in the cart`);
    }
  }


  return (
    <div className="col" key={product.id}>
    <div className="card h-100 card-ground" style={{maxHeight:"550px"}}>
      <p className='d-flex fs-6 gap-1 justify-content-end align-items-center'>{product.ratings.average} <FaStar className='text-warning fs-5 '/></p>
      <img src={product.image} className="card-img-top" style={{maxHeight:"200px"}} alt="..."/>
      <div className="card-body h-50 ">
        <h5 className="card-title font-style ">{product.brand}</h5>
        <p className='card-text fw-semibold font-style'>Model : {product.model}</p>
        
        <p className='card-text fw-semibold font-style'>Released on : {product.release_year}</p>
        <p className='card-text font-style'>Price : ${(product.price)}</p>
      </div>
      <div className='d-flex justify-content-center'>
      <button className="btn font-style" onClick={() => handleAddToCart(product, product.id)}>
          Add to cart
       </button>      </div>
    </div>
   </div>
  )
}

export default Cards