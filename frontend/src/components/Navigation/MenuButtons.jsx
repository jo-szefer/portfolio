import React from "react";
import styled from "styled-components";

import { isWindowOnElement } from "../../utils/isWindowOnElement";

const NavButton = styled.a`
  margin: 10px;
  color: white;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const MenuButtons = ({ handleButtonClick, isRightNav }) => {
  const [_, setScrollY] = React.useState(0);

  const getStyle = (elementID) => {
    if (!isRightNav && isWindowOnElement(elementID)) {
      return { color: " #ffa5a5" };
    } else {
      return { color: "white" };
    }
  };

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (name) => {
    if (handleButtonClick) {
      handleButtonClick();
    }

    const target = document.getElementById(name);
    const navbar = document.getElementById("navbar");

    if (target) {
      const offset = window.pageYOffset - navbar.offsetHeight;
      const totalScroll = target.getBoundingClientRect().top + offset;
      window.scrollTo({ top: totalScroll, behavior: "smooth" });
    }
  };
  return (
    <>
      <NavButton style={getStyle("home")} onClick={() => handleClick("home")}>
        Home
      </NavButton>
      <NavButton style={getStyle("about")} onClick={() => handleClick("about")}>
        About
      </NavButton>
      <NavButton
        style={getStyle("projects")}
        onClick={() => handleClick("projects")}
      >
        Projects
      </NavButton>
      <NavButton
        style={getStyle("contact")}
        onClick={() => handleClick("contact")}
      >
        Contact
      </NavButton>
    </>
  );
};
