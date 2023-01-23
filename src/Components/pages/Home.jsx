import React from "react";



import Img from "../pages/ava-1.jpg";
import Products from "./Products";



const Home = () => {
  return (
    <>
      <div classNameName="hero">
        <div className="card border-0">
          <img className="card-img" src={Img} alt="" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h5 className="card-title display-3 fw-bolder mb-1">
              CHECK OUT WHAT WE HAVE
            </h5>
            <p className="card-text lead fs-2">SHOP WITH US ON A LOW BUDGET</p>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
