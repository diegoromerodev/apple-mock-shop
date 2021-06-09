import styled from "styled-components";

export const IntroDiv = styled.div`
  background-color: #f2f2f2;
  & img {
    height: 500px;
  }
  & h2 {
    font-size: 4em;
    font-weight: 400;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    min-width: 30em;
    margin: 0 auto;
  }
  & a {
    color: #0070c9;
    font-weight: 400;
    font-size: 1.5em;
    margin-top: 20px;
  }
  & a:hover {
    text-decoration: underline;
  }
  & span {
    display: flex;
    flex-direction: column;
  }
  & object {
    height: 0.5em;
    margin-left: 0.2em;
  }
`;

export const TaglineDiv = styled.div`
  background-color: #fafafa;
  width: 70%;
  min-width: 30em;
  margin: 0 auto;
  margin-top: 50px;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  & div > * {
    margin-top: 10px;
  }
  & h2 {
    font-size: 3em;
  }
  & h4 {
    margin-top: 30px;
  }
  & p {
    margin-bottom: 25px;
  }
`;
