import React from "react";
import styled from "styled-components";

import { Section } from "../common/Section";
import { Background } from "./Background";
import { WaveDivider } from "../common/WaveDivider";

const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: serif;
  font-size: 5vw;
  letter-spacing: 0.1em;
  margin: 0 auto;
  line-height: 85vh;
  color: #f5f1ed;
`;

export const Home = () => {
  return (
    <Section id="home" isLight={false}>
      <Background>
        <WaveDivider />
      </Background>
      <HomeTitle>Hi, I'm Joanna. I do stuff.</HomeTitle>
    </Section>
  );
};
