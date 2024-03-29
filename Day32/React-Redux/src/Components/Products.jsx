import React from 'react'
import Cards from './Cards';

const Products = ({products}) => {
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-5 '>
            {
               products &&  products.map((product) =>(
                <Cards product={product} />
            ))
            }
        </div>
    )
}

export default Products