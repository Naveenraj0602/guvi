import React from 'react'
import { deleteFromCart, incrementQuantity, decrementQuantity } from '../Redux/Reducers/Cart'
import {useDispatch } from 'react-redux'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartCard = ({cartItem}) => {

    const dispatch = useDispatch();

    const handleDeleteCart = (id) => {
        dispatch(deleteFromCart(id));
    }

  return (
    <>
<div className="card mb-3" style={{minWidth:"570px", maxHeight:"200px"}} key={cartItem.id}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={cartItem.image} className="img-fluid rounded-start" style={{maxHeight:"130px"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h6 className="card-title">{cartItem.model}</h6>
        <div className='d-flex justify-content-between'>
         <div className='d-flex gap-2 align-items-center'>
         <p className="card-text text-start font-style">Brand : {cartItem.brand}</p>

            <p className='border border-2 bg-blac p-1 text-black rounded-2'>{cartItem.quantity}</p>
            <p className='d-flew row'>
                <IoIosArrowUp onClick={() => dispatch(incrementQuantity(cartItem.id))} />
                <IoIosArrowDown onClick={() => dispatch(decrementQuantity(cartItem.id))}  />
            </p>
        </div>
         <p className="card-text mt-2">$ {cartItem.price * cartItem.quantity}</p>
        </div>
        <div className='-mt-4 d-flex justify-content-end'>
          <MdDelete className='text-danger fs-1' style={{cursor:"pointer"}} onClick={() => handleDeleteCart(cartItem.id)}/>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CartCard