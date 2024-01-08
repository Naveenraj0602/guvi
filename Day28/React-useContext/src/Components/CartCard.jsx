import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useContext } from 'react';
import {CartContext} from "../Context/ContextApi"

const CartCard = ({cartItem}) => {

    const {incrementQuantity, decrementQuantity, removeCarts} = useContext(CartContext);

  return (
<>
<div class="card" style={{minWidth:"740px", }} key={cartItem.id}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={cartItem.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <div className='d-flex justify-content-between'>
           <h5 class="card-title text-start font-style">{cartItem.model}</h5>
           <div className='d-flex gap-2 align-items-center'>
               <p className='border border-2 bg-black p-1 text-white rounded-2'>{cartItem.quantity}</p>
               <p className='d-flew row'>
                <IoIosArrowUp onClick={() => incrementQuantity(cartItem.id)} />
                <IoIosArrowDown onClick={() => decrementQuantity(cartItem.id)} />
               </p>
            </div>
           <h6 class="card-title text-start font-style">$ {(cartItem.price) * (cartItem.quantity)}</h6>
        </div>
        <p class="card-text text-start font-style">Brand : {cartItem.brand}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <button className="btn " onClick={() => removeCarts(cartItem.id)}>Remove</button>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default CartCard