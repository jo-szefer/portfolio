import React from "react";
import styled from "styled-components";

import { Title as RawTitle } from "./Title";
import { isWindowOnElement } from "../../utils/isWindowOnElement";

const SectionWrapper = styled.div`
  min-height: 90vh;
  background: ${(props) =>
    props.isLight
      ? "#f5f1ed"
      : "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlowAppearWrapper = styled.span`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s;
`;

const Title = styled(RawTitle)`
  color: ${(props) => (props.isLight ? "#0f131b" : "#f5f1ed")};
  border-bottom: 2px solid ${(props) => (props.isLight ? "#f74ea1" : "#f7f7f2")};
`;

export const Section = (props) => {
  const [isSectionVisible, setSectionVisible] = React.useState(false);

  const handleScroll = () => {
    if (isWindowOnElement(props.id)) {
      setSectionVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SectionWrapper id={props.id} isLight={props.isLight}>
      {props.title ? (
        <Title isLight={props.isLight}>{props.title}</Title>
      ) : null}
      <SlowAppearWrapper isVisible={isSectionVisible}>
        {props.children}
      </SlowAppearWrapper>
    </SectionWrapper>
  );
};
