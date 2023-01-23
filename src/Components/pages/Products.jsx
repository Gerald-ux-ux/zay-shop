import React from "react";
import { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div className="btn btn-outline-dark ms-2">All Products</div>
          <div className="btn btn-outline-dark ms-2">Men's Clothing</div>
          <div className="btn btn-outline-dark ms-2">Women's Clothing</div>
          <div className="btn btn-outline-dark ms-2">Jewelery </div>
          <div className="btn btn-outline-dark ms-2">Electronics</div>
        </div>
        {filter.slice(0, 20).map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    class="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-titlea mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-texta">${product.price}</p>
                    <a href="#" class="btn btn-outline-dark ms-2">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5  ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-conent-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
