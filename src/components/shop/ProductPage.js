import React, { useEffect, useState } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: #0070c9;
  color: #fafafa;
  font-family: "San Francisco";
  padding: 10px 5%;
  border-radius: 10px;
  font-size: 1.1em;
  margin-top: 30px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #0079c9;
  }
`;

const MainProductInfoDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bababa;
`;

const ProductInfo = styled.div`
  & p {
    width: 80%;
    font-size: 1.1em;
    height: 100%;
    padding-bottom: 50px;
  }
  & h2 {
    width: 20%;
    padding-bottom: 50px;
  }
  & > h2:first-child {
    width: 60%;
    padding-bottom: 0;
    margin: 0 auto;
    font-size: 2em;
    margin-top: 30px;
  }
  & span {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 50px;
  }
  & .separator {
    height: 1px;
    background-color: #bababa;
    width: 48%;
    position: absolute;
    right: 20%;
  }
  & .separator:last-child {
    width: 60%;
  }
`;

const ProductPage = (props) => {
  const { productId } = useParams();
  const { products, setCartItems, numberWithCommas } = props;
  const currProd = products.find((prod) => prod.id === productId);

  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevState) => {
      const newState = [...prevState];
      const existingProductIdx = newState.findIndex(
        (oldProd) => oldProd.id === product.id
      );
      if (existingProductIdx > -1) {
        newState[existingProductIdx].quantity += 1;
        return newState;
      }

      return [...newState, product];
    });
    setAddedToCart(true);
  };

  useEffect(() => {
    setAddedToCart(false);
  }, [addedToCart]);

  return (
    <>
      <MainProductInfoDiv>
        <div>
          <h1>{currProd.name}</h1>
          <h2 style={{ marginTop: "20px", fontWeight: 400 }}>
            ${numberWithCommas(currProd.price)}
          </h2>
          <StyledButton onClick={() => addToCart(currProd)}>
            Add to Bag
          </StyledButton>
        </div>
        <img src={currProd.image} />
        {addedToCart ? <Redirect to="/cart" /> : ""}
      </MainProductInfoDiv>
      <ProductInfo>
        <h2>Product Information</h2>
        <span>
          <h2>Overview</h2>
          <p>
            Product 2 is completely rechargeable, so you’ll eliminate the use of
            traditional batteries. It’s lighter, has fewer moving parts thanks
            to its built-in battery and continuous bottom shell, and has an
            optimized foot design — all helping Product 2 track easier and move
            with less resistance across your desk. And the Multi-Touch surface
            allows you to perform simple gestures such as swiping between web
            pages and scrolling through documents. Product 2 is ready to go
            right out of the box and pairs automatically with your Mac.
          </p>
        </span>
        <div className="separator"></div>
        <span>
          <h2>What&apos;s in the Box</h2>
          <p>
            Magic Mouse 2<br />
            Lightning to USB Cable
          </p>
        </span>
        <div className="separator"></div>
        <span>
          <h2>System Requirements</h2>
          <p>Bluetooth-enabled Mac computer with OS X v10.11 or later</p>
        </span>
        <div className="separator"></div>
      </ProductInfo>
    </>
  );
};

export default ProductPage;
