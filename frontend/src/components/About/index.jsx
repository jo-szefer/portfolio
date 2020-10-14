import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";

import { Content } from "../common/Content";
import { Section } from "../common/Section";

const AboutContentWrapper = styled(Content)`

  font-family: "Lato"
  margin: 30px;
  padding: 30px;
  text-align: center;
  h3{
    color:#f74ea1;
    font-family:"Lato";
  }
`;
const TechnologiesIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
        For the last few months I've been learning how to code. Of course I have
        created a "to-do list". More exciting projects you can find in my
        "Projects" card.
      </p>
      <h3>I work with technologies such as</h3>
      <TechnologiesIcons>
        <FontAwesomeIcon
          icon={Icons.faHtml5}
          size="4x"
          color="#D93E06"
          style={{ margin: "10px" }}
        />
        <FontAwesomeIcon
          icon={Icons.faCss3Alt}
          size="4x"
          color="#1A6FB4"
          style={{ margin: "10px" }}
        />
        <FontAwesomeIcon
          icon={Icons.faJs}
          size="4x"
          color="#EFD81D"
          style={{ margin: "10px" }}
        />
        <FontAwesomeIcon
          icon={Icons.faReact}
          size="4x"
          color="#48CEF7"
          style={{ margin: "10px" }}
        />
        <FontAwesomeIcon
          icon={Icons.faNode}
          size="4x"
          color="#7CB700"
          style={{ margin: "10px" }}
        />
      </TechnologiesIcons>
    </AboutContentWrapper>
  </Section>
);
