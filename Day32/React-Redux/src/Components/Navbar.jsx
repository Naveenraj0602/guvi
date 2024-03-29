import React from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const count = cartItems && cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg p-3 mb-5 common">
    <div className="container-fluid  p-1">
      <a className="navbar-brand" href="#">Shopping Start</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse text-start navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu text-start row col-md-11 col-sm-11" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">All Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Popular Items</a></li>
              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            </ul>
          </li>
        </ul>
        <button className="btn"
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          <BsFillCartFill />
              Cart
          <span className="p-2">{count}</span>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar