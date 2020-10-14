import React from "react";
import styled from "styled-components";

import { Section } from "../common/Section";
import { Background } from "./Background";

const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: serif;
  font-size: 4vw;
  letter-spacing: 0.1em;
  margin: 0 auto;
  line-height: 85vh;
  color: white;
  @media (max-width: 1024px) {
    font-size: 6vw;
  }
  @media (max-width: 750px) {
    font-size: 5vw;
  }
  @media (max-width: 500px) {
    font-size: 7vw;
  }
`;

export const Home = () => {
  return (
    <Section id="home" isLight={false}>
      <Background />
      <HomeTitle>Hi, I'm Joanna. I do stuff.</HomeTitle>
    </Section>
  );
};
