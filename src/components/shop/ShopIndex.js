import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import BorderHeader from "../BorderHeader";
import ProductPage from "./ProductPage";
import ShopItem from "./ShopItem";

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  justify-content: center;
  & > a {
    color: #333;
  }
`;

const ShopIndex = (props) => {
  const { products, numberWithCommas, setCartItems } = props;
  return (
    <div>
      <BorderHeader />
      <Switch>
        <Route exact path="/products">
          <ProductsList>
            {products.map((prod) => (
              <Link key={prod.id} to={"/products/" + prod.id}>
                <ShopItem
                  displayPrice={numberWithCommas(prod.price)}
                  name={prod.name}
                  price={prod.price}
                  image={prod.image}
                />
              </Link>
            ))}
          </ProductsList>
        </Route>
        <Route path={"/products/:productId"}>
          <ProductPage
            setCartItems={setCartItems}
            numberWithCommas={numberWithCommas}
            products={products}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default ShopIndex;
