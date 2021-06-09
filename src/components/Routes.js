import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Homepage from "./Homepage";
import ShopIndex from "./shop/ShopIndex";
import CartPage from "./cart/CartPage";

const Navbar = styled.div`
  background-color: #343434;
  padding: 10px;
  color: #fafafa;
  width: 100%;
  & img {
    width: 1.2em;
    opacity: 90%;
  }
`;

const ContainerDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  min-width: 30em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  & a {
    color: #fafafa;
  }
  & .cart-image object {
    height: 1.4em;
    pointer-events: none;
  }
  & .cart-image {
    opacity: 0.7;
    transition: opacity 0.4s ease-in-out;
  }
  & .cart-image:hover {
    opacity: 0.9;
  }
`;

const Footer = styled.div`
  background-color: #f2f2f2;
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  & div {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  & p {
    color: #7a7a7a;
  }
`;

const NumberInCart = styled.p`
  background-color: #d0d0d0;
  position: relative;
  color: #333;
  width: 1.2em;
  height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: -70%;
  margin-left: 50%;
  opacity: 1;
  font-size: 0.7em;
  padding: 8px;
  transition: all 0.4s ease-in-out;
  &.hidden {
    opacity: 0;
  }
  &:hover {
    background-color: #fafafa;
  }
`;

const Routes = (props) => {
  const { products, cartItems, setCartItems } = props;

  function numberWithCommas(num) {
    return (
      num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ".00"
    );
  }

  return (
    <Router>
      <Navbar>
        <ContainerDiv>
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/202px-Apple_logo_white.svg.png" />
          </Link>
          <Link to="/products">Shop All Accesories</Link>
          <Link to="/cart">
            <div className="cart-image">
              <object data="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ0My4xODgsNDQyLjIwOEw0MTUuOTU2LDE0Mi41NmMtMC43NjgtOC4yNTYtNy42OC0xNC41Ni0xNS45NjgtMTQuNTZoLTQ4Vjk2YzAtMjUuNzI4LTkuOTUyLTQ5Ljg4OC0yOC4wMzItNjcuOTY4ICAgIEMzMDUuODc2LDkuOTUyLDI4MS43MTYsMCwyNTUuOTg4LDBjLTUyLjkyOCwwLTk2LDQzLjA3Mi05Niw5NnYzMmgtNDhjLTguMjg4LDAtMTUuMiw2LjMwNC0xNS45MzYsMTQuNTZMNjguODIsNDQyLjIwOCAgICBjLTEuNjMyLDE3Ljg1Niw0LjM4NCwzNS43MTIsMTYuNDgsNDguOTZTMTE0LjYxMiw1MTIsMTMyLjU2NCw1MTJoMjQ2Ljg4YzE3Ljk1MiwwLDM1LjE2OC03LjU4NCw0Ny4yNjQtMjAuODMyICAgIFM0NDQuNzg4LDQ2MC4wNjQsNDQzLjE4OCw0NDIuMjA4eiBNMTkxLjk4OCw5NmMwLTM1LjI5NiwyOC43MDQtNjQsNjQtNjRjMTcuMTg0LDAsMzMuMjgsNi42MjQsNDUuMzQ0LDE4LjY1NiAgICBjMTIuMDY0LDEyLjAzMiwxOC42NTYsMjguMTYsMTguNjU2LDQ1LjM0NHYzMmgtMTI4Vjk2eiBNNDAzLjA2LDQ2OS42Yy02LjE0NCw2LjY4OC0xNC41MjgsMTAuNC0yMy42NDgsMTAuNEgxMzIuNTY0ICAgIGMtOS4wODgsMC0xNy41MDQtMy43MTItMjMuNjE2LTEwLjQzMmMtNi4xNDQtNi43Mi05LjA1Ni0xNS4zOTItOC4yMjQtMjQuNDhMMTI2LjYxMiwxNjBoMzMuMzc2djQ4YzAsOC44MzIsNy4xNjgsMTYsMTYsMTYgICAgYzguODMyLDAsMTYtNy4xNjgsMTYtMTZ2LTQ4aDEyOHY0OGMwLDguODMyLDcuMTY4LDE2LDE2LDE2YzguODMyLDAsMTYtNy4xNjgsMTYtMTZ2LTQ4aDMzLjM3NmwyNS45MiwyODUuMTIgICAgQzQxMi4xMTYsNDU0LjE3Niw0MDkuMjA0LDQ2Mi44OCw0MDMuMDYsNDY5LjZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
            </div>
            {cartItems.length ? (
              <NumberInCart>
                {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
              </NumberInCart>
            ) : (
              <NumberInCart className="hidden">0</NumberInCart>
            )}
          </Link>
        </ContainerDiv>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/products">
          <ShopIndex
            products={products}
            setCartItems={setCartItems}
            numberWithCommas={numberWithCommas}
          />
        </Route>
        <Route path="/cart">
          <CartPage
            cartItems={cartItems}
            setCartItems={setCartItems}
            numberWithCommas={numberWithCommas}
          />
        </Route>
      </Switch>

      <Footer id="main-footer">
        <div>
          <p>Copyright © 2021 Apple Inc. All rights reserved.</p>
          <p>United States</p>
        </div>
      </Footer>
    </Router>
  );
};

export default Routes;
