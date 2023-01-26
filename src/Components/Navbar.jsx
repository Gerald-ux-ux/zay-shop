import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Product from "./pages/Product";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  function handleSelect(product) {
    window.location.href = `/products/${product.name}`;
  }
const [searchTerm, setSearchTerm] = useState('');
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
  const filtered = product.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProduct(filtered);
};


  return (
    <div>
      <nav className="navbar navbar-expand-lg   py-3 shadow-sm ">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/home">
            <i class="fa fa-shopping-bag" aria-hidden="true">
              Zay Shop
            </i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0`">
              <li className="nav-item ">
                <Link className="nav-link ms-2 " to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-2" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for items..."
                aria-label="Search"
                onChange={handleSearch}
              />

              {filteredProduct.slice(0, 3).map((product) => (
                <li key={product.id} onClick={() => handleSelect(product)}>
                  {product.Name}
                </li>
              ))}
              <button class="btn btn-light " type="submit">
                Search
              </button>

              <div classNameName="buttons">
                <Link to="/cart" class="btn btn-light ms-2">
                  <i class="fa fa-shopping-cart ">Cart ({state.length})</i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
