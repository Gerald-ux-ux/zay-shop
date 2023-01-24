import { Routes, Route, Navigate } from "react-router-dom";

import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import NotFound from "./Components/pages/NotFound";
import Products from "./Components/pages/Products";
import Navbar from "./Components/Navbar";
import Product from "./Components/pages/Product";
import Cart from "./Components/Cart";


function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
          <Route  path="/cart" element={Cart } />
        </Routes>
      </div>
    </>
  );
}

export default App;
