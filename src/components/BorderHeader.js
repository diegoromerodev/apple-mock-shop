import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadingContainer = styled.div`
  height: 3em;
  width: 60%;
  min-width: 30em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-weight: 500;
    font-size: 1.5em;
  }
`;

const BorderDiv = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #b9b9b9;
`;

const BorderHeader = () => {
  return (
    <BorderDiv>
      <HeadingContainer>
        <h1>Apple Accessories</h1>
        <Link to="/products">Browse all</Link>
      </HeadingContainer>
    </BorderDiv>
  );
};

export default BorderHeader;
