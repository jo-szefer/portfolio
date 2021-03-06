import React from "react";
import styled from "styled-components";

import { MenuButtons } from "./MenuButtons";

const StyledMenu = styled.nav`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(4, 5, 25);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0vh;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 500px) {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    width: 50%;
  }

  a {
    font-size: 1.3em;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.2rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const RightNav = ({ open, handleButtonClick }) => {
  return (
    <StyledMenu open={open}>
      <MenuButtons isRightNav={true} handleButtonClick={handleButtonClick} />
    </StyledMenu>
  );
};
