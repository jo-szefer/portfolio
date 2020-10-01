import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  color: rgb(247, 78, 161);
  background: none;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin: 0 auto;
  border-style: solid;
  border-color: rgb(247, 78, 161);
  border-radius: 0.5rem;
  transition: background-color 0.25s ease 0s, color 0.25s ease 0s;
  &:hover {
    background-color: rgb(247, 78, 161);
    color: rgb(255, 255, 255);
  }
`;
