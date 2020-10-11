import React from "react";
import styled from "styled-components";

import { Content } from "../common/Content";
import { Section } from "../common/Section";

const AboutContentWrapper = styled(Content)`
  font-family: "Lato", sans-serif;
  margin: 20px;
  text-align: left;
`;

export const About = () => (
  <Section id="about" isLight={true} title="About me">
    <AboutContentWrapper>
      <p>
        I want to be a good programmer. I have background in genetics and
        experimental biology. Actually I'm working at Etno Cafe as a barista.
        When I am not coding, working, cooking or sleeping you can find me in
        the lab trying to create genetically modified human (just kidding).
      </p>
      <p>
        For the last few months I've been learning how to code. I created a few
        projects, which you can see in my "Projects" card.
      </p>
    </AboutContentWrapper>
  </Section>
);
