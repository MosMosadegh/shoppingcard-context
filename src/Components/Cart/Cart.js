import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import productsContext from "../Contexts/ProductsContext";
import "./Cart.css";

export default function Card() {
  const contextData = useContext(productsContext);
  return (
    <aside className={`bag-sidebar ${contextData.isShowCart ? "active" : ""}`}>
      <div className="d-flex justify-content-center align-items-center mt-3 ">
        <h3 className="bag-title">
          <span>
            <BsBag className="m-2"/>
            Bag
          </span>
          <span>
            <AiOutlineClose
              className="close-icon"
              onClick={() => {
                contextData.setIsShowCart(false);
              }}
            />
          </span>
        </h3>
      </div>
      {contextData.userCart.map((product) => (
        <div className="row bag-wrapper" key={product.id}>
          <div className="col-12 mt-5">
            <div className="card py-3 px-3">
              <div className="col-12 text-center">
                <img
                  src={product.img}
                  alt="Product Image"
                  className="card-img-top w-75"
                />
              </div>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <p className="card-text">{product.title}</p>
                <p className="price">{product.price}$</p>
                <br />
                <a href="#" className="btn btn-danger">
                  Buy
                </a>
                <a
                  href=""
                  className="btn btn-outline-dark mt-3 text-capitalize"
                >
                  More Information
                </a>
                <p className="number"> Number: {product.count}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
