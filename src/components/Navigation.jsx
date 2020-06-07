import React from "react";
import styled from "styled-components";
const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;
`;
const NavButton = styled.a`
  margin: 10px;
  color: white;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
`;

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavButton>Home</NavButton>
      <NavButton>About</NavButton>
      <NavButton>Projects</NavButton>
      <NavButton>Contact</NavButton>
    </NavigationContainer>
  );
};
