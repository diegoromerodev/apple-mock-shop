import React, { useState } from "react";
import Routes from "./Routes";

import productsDB from "./products_data/products";

import "./Global.css";

const App = () => {
  const [products, setProducts] = useState([...productsDB]);
  const [cartItems, setCartItems] = useState([]);
  return (
    <Routes
      products={products}
      setProducts={setProducts}
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  );
};

export default App;
