import React from "react";
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";

import { Content } from "../common/Content";
import { Section } from "../common/Section";
import { isWindowOnElement } from "../../utils/isWindowOnElement";

const AboutSectionContainer = styled.div`
  position: relative;
  width: 100%;
`;

const EntranceAnimation = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.4, .3, .4);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

const AnimWrap = styled.div`
  animation-name: ${EntranceAnimation};
  animation-duration: 3s;
`;

const AboutContentWrapper = styled(Content)`
  width: 50%;
  z-index: 2;
  padding: 25px;
  margin: 0 auto;
  background-color: #f5f1ed;
  position: relative;
  box-shadow: 2px 2px 10px #747474;
  border-radius: 20px;
  font-size: 1em;
  font-family: "Lato";
  text-align: center;
  h3 {
    color: #ffa5a5;
  }

  @media (max-width: 572px) {
    width: 90%;
    border-radius: none;
    box-shadow: none;
  }
`;

const TechnologiesIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 572px) {
    flex-direction: row;
  }
`;

const AboutBackground = styled.div`
  height: 50%;
  background: #da9f93;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 30%;
  left: 0;
`;

export const About = () => {
  const [isSectionVisible, setSectionVisible] = React.useState(false);

  const handleScroll = () => {
    if (isWindowOnElement("about")) {
      setSectionVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section id="about" isLight={true} title="About me">
      <AboutSectionContainer>
        <AboutContentWrapper>
          <p>
            I want to be a good programmer. I have background in genetics and
            experimental biology. Actually I'm working at Etno Cafe as a
            barista. When I am not coding, working, cooking or sleeping you can
            find me in the lab trying to create genetically modified human (just
            kidding).
          </p>
          <p>
            For the last few months I've been learning how to code. Of course I
            have created a "to-do list". More exciting projects you can find in
            my "Projects" card.
          </p>
          <h3>I work with technologies such as</h3>

          {isSectionVisible ? (
            <TechnologiesIcons>
              <AnimWrap>
                <FontAwesomeIcon
                  className="icon"
                  icon={Icons.faHtml5}
                  size="4x"
                  color="#D93E06"
                  style={{ margin: "20px" }}
                />
              </AnimWrap>
              <AnimWrap>
                <FontAwesomeIcon
                  icon={Icons.faCss3Alt}
                  size="4x"
                  color="#1A6FB4"
                  style={{ margin: "20px" }}
                />
              </AnimWrap>
              <AnimWrap>
                <FontAwesomeIcon
                  icon={Icons.faJs}
                  size="4x"
                  color="#EFD81D"
                  style={{ margin: "20px" }}
                />
              </AnimWrap>
              <AnimWrap>
                <FontAwesomeIcon
                  icon={Icons.faReact}
                  size="4x"
                  color="#48CEF7"
                  style={{ margin: "20px" }}
                />
              </AnimWrap>
              <AnimWrap>
                <FontAwesomeIcon
                  icon={Icons.faNode}
                  size="4x"
                  color="#7CB700"
                  style={{ margin: "20px" }}
                />
              </AnimWrap>
            </TechnologiesIcons>
          ) : null}
        </AboutContentWrapper>
        <AboutBackground />
      </AboutSectionContainer>
    </Section>
  );
};
