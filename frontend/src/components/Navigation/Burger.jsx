import React from "react";
import styled from "styled-components";

import { RightNav } from "./RightNav";
import { MenuAltLeft } from "@styled-icons/boxicons-regular/MenuAltLeft";

const StyledBurger = styled(MenuAltLeft)`
  color: white;
  position: absolute;
  top: 20%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;

export const Burger = () => {
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} />
      <RightNav open={open} handleButtonClick={handleButtonClick} />
    </>
  );
};
