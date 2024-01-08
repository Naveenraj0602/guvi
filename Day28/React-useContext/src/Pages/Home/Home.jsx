import React, { useEffect, useContext, useState } from 'react'
import { CartContext } from '../../Context/ContextApi';
import Product from '../../Components/Product';

const Home = () => {

  const [products, setProducts] = useState([]);

  const {cartItems} = useContext(CartContext);

  useEffect(() => {
   async function fetchApi() {
     try{
      const response = await fetch('https://freetestapi.com/api/v1/mobiles');
      const data = await response.json();
      setProducts(data);
     }catch(err){
      console.error(`Error occurred fetching : ${err.message}`);
     
     }
   }
   fetchApi();
  },[]);


  // console.log(cartItems);

  return (
    <section className='container'>
      <div className='container-fluid col-lg-12 ' >
        <Product products={products} />
      </div>
    </section>
  )
}

export default Home