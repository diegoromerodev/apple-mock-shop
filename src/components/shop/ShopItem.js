import React, { useEffect } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  height: 50vh;
  width: 20vw;
  border-bottom: 1px solid #b9b9b9;
  border-left: 1px solid #b9b9b9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  & h2 {
    font-weight: 400;
    font-size: 1.2em;
  }
  & h2:last-child {
    margin-top: 15px;
  }
  & img {
    width: 70%;
  }
`;

const ShopItem = ({ name, image, displayPrice }) => {
  useEffect(() => {
    const productItems = document.querySelectorAll(".product-item");
    for (let i = 2; i < productItems.length; i += 3) {
      productItems[i].style.borderRight = "1px solid #b9b9b9";
    }
  });
  return (
    <ItemContainer className="product-item">
      <img src={image} />
      <span>
        <h2>{name}</h2>
        <h2>${displayPrice}</h2>
      </span>
    </ItemContainer>
  );
};

export default ShopItem;
