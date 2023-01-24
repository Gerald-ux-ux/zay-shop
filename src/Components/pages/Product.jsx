import React from "react";
import { useState, useEffect } from "react";
import { useDispacth, useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useParams } from "react-router-dom";
import { Link  } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
Loading ....
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="py-5">
        <div className="col md-3">
          <img
            src={product.image}
            alt={product.title}
            height="420px"
            width="350px"
          />
        </div>
        <div className="col-md-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead1 fw-bolder ">
            Rating {product.rating && product.rating.rate}
            <i className=" fa fa-star"></i>
          </p>
          <h3 className="dislpay-6 fw-bold my-4 ">$ {product.price}</h3>
          <p className="lead1 fw-bolder ">{product.description}</p>
          <button className="btn btn-outline-dark ms-1" onClick={() => addProduct(product)}
          >Add to cart</button>
          <Link  to="/cart"className="btn btn-outline-dark ms-1 px-3">Go to cart</Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
