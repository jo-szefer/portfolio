import React from "react";
import styled from "styled-components";

import { Section } from "../common/Section";
import { Background } from "./Background";

const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: serif;
  font-size: 45px;
  letter-spacing: 0.1em;
  margin: 0 auto;
  line-height: 85vh;
  color: white;
  @media (max-width: 500px) {
    font-size: 30px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
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
