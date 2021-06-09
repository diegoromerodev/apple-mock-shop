import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

import CartItem from "./CartItem";

const CartInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(90vh + 20px);
  margin-top: 50px;
  & h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
`;

const CheckOutButton = styled.button`
  border: none;
  background-color: #0070c9;
  color: #fafafa;
  font-family: "San Francisco";
  padding: 10px 5%;
  border-radius: 10px;
  font-size: 1.1em;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: #0079c9;
  }
`;

const Cart = (props) => {
  const { cartItems, setCartItems, numberWithCommas } = props;

  const calculateTotal = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  };

  return (
    <CartInfoDiv>
      <h1>Your bag total is ${numberWithCommas(calculateTotal())}</h1>
      <h3>Free delivery and free returns.</h3>
      <CheckOutButton>Check Out</CheckOutButton>
      {cartItems.map((prod, idx) => (
        <CartItem
          key={prod.id}
          product={prod}
          setCartItems={setCartItems}
          numberWithCommas={numberWithCommas}
          index={idx}
        />
      ))}
    </CartInfoDiv>
  );
};

export default Cart;
