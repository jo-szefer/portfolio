import React from "react";
import styled from "styled-components";

import { Title } from "../common/Title";
import { Content } from "../common/Content";

const AboutWrapper = styled.div`
  height: 100vh;
`;
const AboutContent = styled(Content)`
  max-width: 30vw;
  font-family: "Lato", sans-serif;
  margin: 10px;
  text-align: left;
`;

export const About = () => {
  return (
    <AboutWrapper id="about">
      <Title>About me</Title>
      <AboutContent>
        I want to be a good programmer. I have background in genetics and
        experimental biology. Actually I'm working at Etno Cafe as a barista.
        When I am not coding, working, cooking or sleeping you can find me in
        the lab trying to create genetically modified human (just kidding). For
        the last few months I've been learning how to code.I created a few
        projects, which you can see in my "Projects" card.
      </AboutContent>
    </AboutWrapper>
  );
};
