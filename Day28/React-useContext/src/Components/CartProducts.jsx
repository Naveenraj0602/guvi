import {useContext} from 'react'
import {CartContext} from "../Context/ContextApi"
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import { IoArrowUndo } from "react-icons/io5";

const CartProducts = () => {

    const {cartItems} = useContext(CartContext);

    var randomNumber =   400;

    const calculateAmount = (item) => {
      const amount = ((item.quantity * item.price.toFixed(2)))
      return amount.toFixed(2)
   }

   const calculateTotal = () => {
       return cartItems.reduce((total, item) => total + calculateAmount(item), 0);
   }

   

  return (
   <div className='d-flex  align-items-center col gap-3'>
      <div className='row g-3 mt-3'>
         <Link to={'/'} className='text-start'>
            <IoArrowUndo className='fs-3 text-white' />
         </Link>
        {
            cartItems && 
            cartItems.map((cartItem) =>(
                <CartCard cartItem={cartItem} />
            ))
        }
       </div>
       {
        cartItems.length > 0 ? (
        <div class="card h-100 mt-5 rounded-5 " style={{minWidth:"540px", }} key={cartItems.id}>
          <div class="card-body">
             <h5 class="card-title">Summary</h5>
          </div>
          <ul class="list-group list-group-flush">
             <li class="list-group-item">Price : ${calculateTotal()}</li>
              <li class="list-group-item">Discount : - ${randomNumber}</li>
              <li class="list-group-item">Total Amount : {calculateTotal() - randomNumber} </li>

           </ul>
        <div class="card-body">
              <button className='btn btn-success w-100'>Check out</button>
        </div>
    </div>
        ) : (
          <div className='mt-3 p-4 text-center d-flex justify-content-center'>
            <h4 className='text-white'>Your cart is Empty, Go  <Link to={'/'}>Home</Link> </h4>
          </div>
        )
       }
   </div>
  )
}

export default CartProducts