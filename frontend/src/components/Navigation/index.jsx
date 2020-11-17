import React from "react";
import styled from "styled-components";

import { Burger } from "./Burger";
import { MenuButtons } from "./MenuButtons";

const NavigationContainer = styled.div`
  display: flex;
  background-color: #0f131b;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Navigation = () => {
  const [burgerVisible, setBurgerVisible] = React.useState(
    window.innerWidth <= 767
  );

  const isScreenWide = () => {
    if (window.innerWidth > 767) {
      setBurgerVisible(false);
    } else {
      setBurgerVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", isScreenWide);

    return () => window.removeEventListener("resize", isScreenWide);
  }, []);

  return (
    <NavigationContainer id="navbar">
      {burgerVisible ? <Burger /> : <MenuButtons />}
    </NavigationContainer>
  );
};
