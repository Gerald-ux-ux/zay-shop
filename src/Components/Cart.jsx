import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
/* eslint-disable no-restricted-globals */
import { addCart, delCart } from "../redux/action";


const Cart = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    alert("Successful purchase! Continue shoping with us.");
    navigate("/")
      location.reload();
  };

  const calculateTotal = () => {
    let total = 0;
    state.forEach((item) => {
      total += item.qty * item.price;
    });
    return total;
  };

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5   rounded-1 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className="snt">Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 py-4">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3 className="snt">{product.title}</h3>
                <p className="lead fw-bold">{product.qty * product.price}</p>
                <button
                  className="btn btn-outline-dark me-2"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="d-flex justify-content-center mb-2 pb-2">
          <p className="lead fw-bold">Total: ${calculateTotal()}</p>
        </div>
        <div className="container">
          <div className=" text-center ">
            <button
              className="btn btn-outline-dark mb-2 w-25 mx-auto"
              onClick={handleClick}
              
            >
              Pay
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}

    </div>
  );
};

export default Cart;
