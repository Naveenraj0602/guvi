import React from 'react'
import {useSelector} from 'react-redux';
import CartCard from './CartCard';
import CartSummary from './CartSummary';

const CartProduct = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <div className="offcanvas offcanvas-bottom" style={{width: "100%" , height:'70%'}} data-bs-scroll="true" tabIndex="1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
         <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Cart Items</h5>
         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
             <div className='d-flex gap-5'>
             {
                cartItems && 
                cartItems.map((cartItem) => (
                    <CartCard cartItem={cartItem} />
                ))
             }
             </div>
             {
              cartItems.length > 0 ? (
                <CartSummary style={{maxWidth:"600px"}} cartItems={cartItems}/>
              ):(
                <div className='mt-3 p-4 text-center d-flex justify-content-center'>
                   <h4 className='font'>Your cart is Empty</h4>
                </div>
              )
             }
         </div>
       </div>
    </div>
  )
}

export default CartProduct