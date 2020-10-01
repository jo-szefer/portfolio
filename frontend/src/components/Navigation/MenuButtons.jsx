import React from "react";
import styled from "styled-components";

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

export const MenuButtons = ({ handleButtonClick }) => {
  const [scrollY, setScrollY] = React.useState(0);

  const getStyle = (elementID) => {
    const element = document.getElementById(elementID);
    const navbar = document.getElementById("navbar");

    if (element && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const offsetTop = element.offsetTop - navbarHeight;
      const offsetBottom = element.offsetHeight + offsetTop;
      if (scrollY >= offsetTop && scrollY < offsetBottom) {
        return { color: "rgb(247, 78, 161)" };
      } else {
        return { color: "white" };
      }
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
