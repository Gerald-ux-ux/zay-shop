import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./pages/Footer";

const Checkout = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(console.log);
    
  }, []);


  function handleClick() {
    alert(`You have successfully purchased, ${products.title}`);
  }




  return (
    <>
      <div className="card-deck">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <small className="text-muted"> $ {product.price}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-4">
        <div className="row">
          <button
            className="btn btn-light ms-2"
            onClick={() => handleClick(products[0])}
          >
            Pay now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
