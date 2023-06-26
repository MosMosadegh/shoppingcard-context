import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";
import productsContext from "../Contexts/ProductsContext";

export default function Navbar() {
  const contextData = useContext(productsContext);
  const handleToggleCart = () => {
    contextData.setIsShowCart(!contextData.isShowCart);
  };
  
  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          Mostafa Shop
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="#" className="bag">
            <BsBag className="text-white" onClick={handleToggleCart}/>
            <span className="bag-product-counter">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
