import React from "react";
import styled from "styled-components";

const CartItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  & img {
    width: 20%;
  }
  & span {
    text-align: right;
  }
  & span h3 {
    font-weight: 400;
    cursor: pointer;
    color: #0079c9;
  }
  & span h3:hover {
    text-decoration: underline;
  }
`;

const StyledSelect = styled.select`
  font-family: "San Francisco";
  background-color: transparent;
  font-size: 2em;
`;

const CartItem = (props) => {
  const { name, price, quantity, image } = props.product;
  const { setCartItems, index, numberWithCommas } = props;

  const handleQuantity = (e) => {
    setCartItems((prevState) => {
      const newState = [...prevState];
      newState[index].quantity = parseInt(e.target.value);
      return [...newState];
    });
  };

  const handleUnCart = () => {
    setCartItems((prevState) => {
      const newState = prevState;
      return [...newState.slice(0, index), ...newState.slice(index + 1)];
    });
  };

  return (
    <CartItemDiv>
      <img src={image} />
      <h1>{name}</h1>
      <StyledSelect value={quantity} onChange={handleQuantity}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </StyledSelect>
      <span>
        <h2>${numberWithCommas(price)}</h2>
        <h3 onClick={handleUnCart}>Remove</h3>
      </span>
    </CartItemDiv>
  );
};

export default CartItem;
