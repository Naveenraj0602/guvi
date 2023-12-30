import React from "react";
import '/src/App.css'
import ProductList from '/src/components/card.jsx'



function Body(){
    return(
       <>
       <div class="head">
          <div class=" description-part" >
            <div class="text-center ">
                <h1 id="description-heading">Shop In Style</h1>
                <p id="description-paragraph">We have everything you NEED</p>
            </div >
          </div>
       </div>
       <div className="products">
       <ProductList/>
       </div>
       </>
        
    )
}

export default Body