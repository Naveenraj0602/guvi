import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '/src/App.css';
import Navbar from './Navbar'; 


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const productsWithIsAdded = data.map(product => ({ ...product, isAdded: false }));
        setProducts(productsWithIsAdded);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };  

    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, isAdded: !product.isAdded } : product
      )
    );
  };

  // To Calculate the number of products in the cart
  const cartCount = products.filter(product => product.isAdded).length;

  console.log('Cart Count:', cartCount);  // Log cart count for debugging

  return (
    <>
      <Navbar cartCount={cartCount} /> {/* Pass cartCount as a prop to Navbar */}
      <div className='card-container d-flex flex-wrap'>
        {products.map(product => (
          <div key={product.id} className="card col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <p>Price: ${product.price}</p>
              <button className={`btn-product  ${product.isAdded ? 'added' : ''}`} onClick={() => handleAddToCart(product.id)}>
                {product.isAdded ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
